var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _this=this,_jsxFileName="C:\\Users\\guo\\Desktop\\EECS393\\Job-App\\src\\components\\HeaderBar\\Headerbar.js";var _Dimensions$get=_reactNative.Dimensions.get('screen'),width=_Dimensions$get.width,height=_Dimensions$get.height;var HeaderBar=function HeaderBar(){return _react.default.createElement(_reactNative.View,{style:styles.container,__self:_this,__source:{fileName:_jsxFileName,lineNumber:14,columnNumber:9}},_react.default.createElement(_reactNative.View,{style:[styles.buttonContainer,styles.buttonContainerLeft],__self:_this,__source:{fileName:_jsxFileName,lineNumber:15,columnNumber:13}},_react.default.createElement(_reactNative.TouchableOpacity,{activeOpacity:.8,style:styles.button,__self:_this,__source:{fileName:_jsxFileName,lineNumber:16,columnNumber:17}},_react.default.createElement(_reactNative.Text,{style:styles.plus,__self:_this,__source:{fileName:_jsxFileName,lineNumber:19,columnNumber:25}},"Add"))),_react.default.createElement(_reactNative.View,{style:[styles.buttonContainer,styles.buttonContainerRight],__self:_this,__source:{fileName:_jsxFileName,lineNumber:22,columnNumber:13}},_react.default.createElement(_reactNative.TouchableOpacity,{activeOpacity:.8,style:styles.button,__self:_this,__source:{fileName:_jsxFileName,lineNumber:23,columnNumber:17}},_react.default.createElement(_reactNative.Text,{style:styles.plus,__self:_this,__source:{fileName:_jsxFileName,lineNumber:26,columnNumber:25}},"Login"))));};var styles=_reactNative.StyleSheet.create({container:{width:width,height:height/12,backgroundColor:'#3D348B',flexDirection:'row'},buttonContainer:{flex:1,marginTop:'auto',marginBottom:10},buttonContainerLeft:{alignItems:'flex-start'},buttonContainerRight:{alignItems:'flex-end'},button:{justifyContent:'center',alignItems:'center',marginLeft:24,marginRight:24},plus:{color:'#E0E2DB',fontSize:24}});var _default=HeaderBar;exports.default=_default;