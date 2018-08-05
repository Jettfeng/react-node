<h3>9-6 使用高级组件完善登录流程--概念理解-函数式编程</h3>

<p>function hello(){</p>
<p>console.log('hello imooc')</p>
<p>}</p>
<p>function WrapHello(fn){</p>
<p>  return function(){</p>
<p>console.log('before say hello');</p>
<p>fn()</p>
<p> console.log('after say hello');</p>
<p>}</p>
<p>}</p>
<p>hello = WrapHello(hello)</p>
<p>hello()</p>
<p>执行结果：</p>
<p>before say hello</p>
<p>hello imooc</p>
<p>after say hello</p>
<p>如果不是return一个函数，执行顺序可能不一样</p>
 


  




    
    
   
  



