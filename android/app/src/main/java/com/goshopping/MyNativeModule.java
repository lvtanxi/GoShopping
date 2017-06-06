package com.goshopping;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.provider.ContactsContract;
import android.support.v4.util.ArrayMap;
import android.widget.Toast;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import java.util.Map;

import javax.annotation.Nullable;

/**
 * Date: 2017-06-05
 * Time: 13:02
 * Description:
 */

public class MyNativeModule extends ReactContextBaseJavaModule implements  ActivityEventListener {

    public MyNativeModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        //一定要有一个名字。在RN代码里面需要使用这个名字
        return this.getClass().getSimpleName();
    }

    /**
     * 函数不能有返回值，因为被调用的原生代码是异步的。原生代码执行结束之后只能同座函数或者返送消息给rn进行回调
     */
    @ReactMethod
    public void rnCallNative(String msg) {
        Toast.makeText(getReactApplicationContext(), msg+":"+this.getClass().getSimpleName()+":"+Thread.currentThread().getName(), Toast.LENGTH_LONG).show();
    }

    /**
     * 启动原生界面的时候需要给Intent设置一个Flag为FLAG_ACTIVITY_NEW_TASK
     */
    @ReactMethod
    public void startAndroidNative() {
        LoginActivity.startLoginActivity(getReactApplicationContext());
    }


    @ReactMethod
    public void returnMsgNative() {
        Intent intent = new Intent(Intent.ACTION_PICK, ContactsContract.Contacts.CONTENT_URI);
        getReactApplicationContext().addActivityEventListener(this);
        getReactApplicationContext().startActivityForResult(intent,1,new Bundle());
    }

    @ReactMethod
    public void measureLayout(Callback success,Callback error) {
        try {
            success.invoke(100,100,200,200);
        } catch (Exception e) {
            error.invoke(e.getMessage());
        }
    }
    @ReactMethod
    public void promiseButton(String msg, Promise promise) {
        Toast.makeText(getReactApplicationContext(), msg, Toast.LENGTH_SHORT).show();
        try {
            promise.resolve(getCurrentActivity().getComponentName().toString());
        } catch (Exception e) {
            promise.reject("100",e.getMessage());
        }
    }



    public void sendMessageToRn(String msg){
        getReactApplicationContext().getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit("AndroidToRNMessage",msg);
    }
    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        Map<String,Object> map= new ArrayMap<>();
        map.put("URL","http://www.baidu.com");
        return map;
    }


    @Override
    public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {
        if (requestCode == 1) {
            Toast.makeText(getReactApplicationContext(), "asd", Toast.LENGTH_SHORT).show();
            sendMessageToRn("我I的返回值就是");
            getReactApplicationContext().removeActivityEventListener(this);
        }
    }

    @Override
    public void onNewIntent(Intent intent) {

    }
}
