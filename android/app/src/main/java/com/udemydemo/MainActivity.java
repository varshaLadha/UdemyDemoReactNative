package com.udemydemo;

import android.os.Bundle;
import com.facebook.react.ReactActivity;

import org.devio.rn.splashscreen.SplashScreen;

public class MainActivity extends ReactActivity {

    @Override
    protected void onCreate(Bundle savedInstance){
        SplashScreen.show(this);
        super.onCreate(savedInstance);
    }

    @Override
    protected String getMainComponentName() {
        return "UdemyDemo";
    }
}
