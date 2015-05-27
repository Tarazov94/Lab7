function show()  
        {  
            $.ajax({  
                url: "time.php",  
                cache: false,  
                success: function(html){  
                    $("#content2").html(html);  
                }  
            });  
        }
$(document).ready(function(){  
            show();  
            setInterval('show()',1000);  
        }); 

$(document).ready(function(){ 
   // alert('#pv_like_wrap');
   var b = document.getElementById('pv_like_icon');
            $('#pv_like_wrap').click(function(){
                b.style.zoom=1.5;
                b.style.marginTop='3px';
                var c = document.getElementById('zamet');
                $.ajax({  
                    url: "like.php?id="+c.value,  
                    cache: false,  
                    success: function(html){  
                        $("#pv_like_count").html(html);
                        b.style.zoom=1;
                        b.style.marginTop='6px';
                    }  
                });  
            });  
        });

