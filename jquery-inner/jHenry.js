(function(window){

   jHenry = function(selector){

      return new jHenry.fn.init(selector);
   }


   jHenry.fn=jHenry.prototype={

      constructor :jHenry,
      version: 2.3,
      length :0,
      init: function () {


      },
      map:function(){},
      each:function(){}



   };

   jHenry.fn.init.prototype = jHenry.fn;


window.$ =window.jHenry = jHenry;

})(window);