package com.wix;

import com.facebook.react.BuildConfig;
import com.facebook.react.ReactPackage;
import com.reactnativenavigation.NavigationApplication;

import java.util.Arrays;
import java.util.List;


public class MainApplication extends NavigationApplication {
  private static final boolean DEBUG = true;

  @Override
  public boolean isDebug() {
    return DEBUG;
  }

  @Override
  public List<ReactPackage> createAdditionalReactPackages() {
    return null;
  }

  @Override
  public String getJSMainModuleName() {
    return "index.android";
  }

//
//  protected List<ReactPackage> getPackages(){
//    return Arrays.<ReactPackage>asList();
//  }
//
//
//  @Override
//  public List<ReactPackage> createAdditionalReactPackages() {
//    return getPackages();
//  }
}

//public class MainApplication extends Application implements ReactApplication {
//
//  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
//    @Override
//    public boolean getUseDeveloperSupport() {
//      return BuildConfig.DEBUG;
//    }
//
//    @Override
//    protected List<ReactPackage> getPackages() {
//      return Arrays.<ReactPackage>asList(
//          new MainReactPackage()
//      );
//    }
//
//    @Override
//    protected String getJSMainModuleName() {
//      return "index";
//    }
//  };
//
//  @Override
//  public ReactNativeHost getReactNativeHost() {
//    return mReactNativeHost;
//  }
//
//  @Override
//  public void onCreate() {
//    super.onCreate();
//    SoLoader.init(this, /* native exopackage */ false);
//  }
//}
