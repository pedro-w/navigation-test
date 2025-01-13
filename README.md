This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Navigation Test

This is a minimal example using React Native for Windows with navigation added. 

To run, clone this repo then

```
yarn
yarn run windows
```

I believe this ought to work (based on copy-pasted code) but when I run it, the app screen appears briefly and then disappears, with no errors shown.

When I run in Visual Studio there is an assert failure at line 159 of `PaperUIManagerModule.cpp`

```C++
  void createView(int64_t reactTag, std::string viewName, int64_t rootTag, React::JSValueObject &&props) noexcept {
    m_nativeUIManager->ensureInBatch();
    if (auto viewManager = GetViewManager(viewName)) {
      auto node = viewManager->createShadow();
      node->m_className = std::move(viewName);
      node->m_tag = reactTag;
      node->m_rootTag = rootTag;
      node->m_viewManager = viewManager;

      node->createView(props);

      m_nativeUIManager->CreateView(*node, props);

      m_nodeRegistry.addNode(shadow_ptr(node), reactTag);

      node->updateProperties(props);
    } else {
      assert(false); // *** HERE ***
      return;
    }
  }
```

The variable `viewName` is "RNSScreenContentWrapper" 

