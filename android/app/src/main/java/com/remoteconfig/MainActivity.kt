package com.remoteconfig

import android.os.Bundle
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.ReactRootView
import org.devio.rn.splashscreen.SplashScreen;

class MainActivity : ReactActivity() {

  override fun getMainComponentName(): String = "remoteConfig"

  override fun onCreate(savedInstanceState: Bundle?) {
   // SplashScreen.show()
    super.onCreate(savedInstanceState)
  }

  override fun createReactActivityDelegate(): ReactActivityDelegate {
    return object : ReactActivityDelegate(this, mainComponentName) {
      override fun createRootView(): ReactRootView {
        return ReactRootView(this@MainActivity)
      }
    }
  }
}
