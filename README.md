# eModal
>> 自己封装的弹窗组件

#使用方法
>> 开发者：在页面中引入css和js：

    <link rel="stylesheet" href="your/path/to/css/modal.css"/>
    <script src="your/path/to/eModal.js"></script>

>> 使用皮肤
    
    <link rel="stylesheet" href="your/path/to/css/skin-what-you-need.css"/>
    
>> 线上版引入

     <link rel="stylesheet" href="your/path/to/dist/eModal/css/eModal.css"/>
     <script src="your/path/to/dist/eModal/eModal.js"></script>
    
>> 使用方法与alert等一样：

    eModal.alert("信息")
    eModal.confirm("确定")
    eModal.confirm("确定要点击我吗？", function(){
            }, function(){}, {shade: true});
            
    eModal.confirm("确定要点击我吗？", function(){
            }, function(){}, {shade: false});
            
    eModal.alert("信息",{shade: false});
    
    
# To Echo
>> npm install fis3 -g

>> npm install fis3-postpackager-loader -g

>> 在根目录下，运行start.sh即可压缩文件     
    
