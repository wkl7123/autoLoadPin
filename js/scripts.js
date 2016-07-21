    function item(){
            var x=document.createElement("DIV")
            x.className+=' pin'
            x.style.width="222px"
            x.style.height=75+parseInt(50*Math.random())+"px"
            x.style.backgroundColor='rgba('+parseInt(250*Math.random())+','+parseInt(250*Math.random())+','+parseInt(250*Math.random())+','+'0.5)'
            return x
        }
        function put(newItem){
            if(itemNum<colNum){
                newItem.style.top="0px"
                newItem.style.left=lefts[itemNum]
                document.getElementById('wkl').appendChild(newItem)
                heights[itemNum]=newItem.offsetTop+newItem.offsetHeight
                itemNum++
            }else{
                var flag=0
                var flag_height=heights[0]
                for(var i=1;i<colNum;i++){
                    if(heights[i]<flag_height){
                        flag_height=heights[i]
                        flag=i
                    }
                }
                newItem.style.top=flag_height+'px'
                newItem.style.left=lefts[flag]
                document.getElementById('wkl').appendChild(newItem)
                heights[flag]=newItem.offsetTop+newItem.offsetHeight
                itemNum++
            }
        }
        function resize(){
            // itemNum=0
            // heights=[0,0,0,0,0]
            if(document.body.clientWidth<=489){
                if(colNum==1){return}
                $('#wkl-backup').empty().append($('#wkl').children())
                colNum=1
                itemNum=0
                heights=[0,0,0,0,0]
                $('#container').css('width', '252px')
                var items=$('#wkl-backup').children();
                for(var i=0;i<items.size();i++){
                    put(items.get(i))
                }
            }


            else if(document.body.clientWidth>489 && document.body.clientWidth<=726){
                if(colNum==2){return}
                $('#wkl-backup').empty().append($('#wkl').children())
                colNum=2
                itemNum=0
                heights=[0,0,0,0,0]
                $('#container').css('width', '489px')
                var items=$('#wkl-backup').children();
                for(var i=0;i<items.size();i++){
                    put(items.get(i))
                }
            }

            else if(document.body.clientWidth>726 && document.body.clientWidth<=963){
                if(colNum==3){return}
                $('#wkl-backup').empty().append($('#wkl').children())
                colNum=3
                itemNum=0
                heights=[0,0,0,0,0]
                $('#container').css('width', '726px')
                var items=$('#wkl-backup').children();
                for(var i=0;i<items.size();i++){
                    put(items.get(i))
                }
            }

            else if(document.body.clientWidth>963 && document.body.clientWidth<=1200){
                if(colNum==4){return}
                $('#wkl-backup').empty().append($('#wkl').children())
                colNum=4
                itemNum=0
                heights=[0,0,0,0,0]
                $('#container').css('width', '963px')
                var items=$('#wkl-backup').children();
                for(var i=0;i<items.size();i++){
                    put(items.get(i))
                }
            }

            else if(document.body.clientWidth>1200){
                if(colNum==5){return}
                $('#wkl-backup').empty().append($('#wkl').children())
                colNum=5
                itemNum=0
                heights=[0,0,0,0,0]
                $('#container').css('width', '1200px')
                var items=$('#wkl-backup').children();
                for(var i=0;i<items.size();i++){
                    put(items.get(i))
                }
            }
        }

        var throttle = function(fn, delay){
            fn.timer = null;    
            return function(){
                var context = this, args = arguments;
                clearTimeout(fn.timer);
                fn.timer = setTimeout(function(){
                    fn.apply(context, args);
                }, delay);
            };
         };

          function throttle1(method, context) {
             clearTimeout(method.tId);
             method.tId = setTimeout(function(){
                 method.call(context);
             },500);
         }

         function Loading(){
              for(var j=0;j<20;j++){
                   put(item())
              }
        }