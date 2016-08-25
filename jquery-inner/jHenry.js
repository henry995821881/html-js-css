(function(window){

   jQuery = function(selector){

      return new jQuery.fn.init(selector);
   }


   jQuery.fn=jQuery.prototype={

      constructor :jQuery,
      version: 2.3,
      length :0,
      init: function () {


      },
      map:function(){},
      each:function(){}


   };

   jQuery.fn.init.prototype = jQuery.fn;




})(window);