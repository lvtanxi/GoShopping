package com.goshopping;

import android.widget.Toast;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.flaviofaria.kenburnsview.KenBurnsView;

/**
 * Date: 2017-06-05
 * Time: 16:54
 * Description:
 */

public class KenBurnsViewManger extends SimpleViewManager<KenBurnsView> {
    private ThemedReactContext mReactContext;

    @Override
    public String getName() {
        return "KenBurnsView";
    }

    @Override
    protected KenBurnsView createViewInstance(ThemedReactContext reactContext) {
        mReactContext = reactContext;
        KenBurnsView kenBurnsView = new KenBurnsView(reactContext);
        kenBurnsView.setImageResource(R.drawable.timg);
        return kenBurnsView;
    }

    @ReactProp(name = "source")
    public void setSource(KenBurnsView burnsView, String source) {
        Toast.makeText(mReactContext, source, Toast.LENGTH_SHORT).show();
    }

}
