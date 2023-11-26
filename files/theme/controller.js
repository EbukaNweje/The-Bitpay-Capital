 $alertme = $("#alertUser");
 
    $("#ref-me").submit(function(e){
         e.preventDefault();
         let $formD = $(this).serialize();
         // let but = $(".ref-sub");
         //   but.prop('disabled',true).html('Please wait...');
         // callAjaxApi(but,$alertme,'general',$formD,'Sent');
    })
   
   $plan = $("#plans");
   $plan.change(function(){
          let stm = $(this).val();
          $("#mloader").show();
          $(".invt").hide();
             

          setTimeout(function(){
            $("#mloader").hide();
          
            
            switch(stm){
               case 'Starter':
                    $("#mini").html(`$7,000.00`);
                    $("#max").html(`$24,000.00`);
                    $("#roi").html(`187%`);
                    $(".invt").show();
                 break;
               case 'Silver':
                 $("#mini").html(`$25,000.00`);
                 $("#max").html(`$49,000.00`);
                 $("#roi").html(`216%`);
                 $(".invt").show();
                  break;
               case 'Gold':
                 $("#mini").html(`$50,000.00`);
                 $("#max").html(`$99,000.00`);
                 $("#roi").html(`246%`);
                 $(".invt").show();
                 break;
                 case 'Platinum':
                    $("#mini").html(`$150,000.00`);
                    $("#max").html(`$1,000,000.00`);
                    $("#roi").html(`301%`);
                    $(".invt").show();
                    break;

                    default:
                     $(".invt").hide();
            }
          },1000)
         
   });
     
      $(".subTins").click(function(){
             let pat = $(this);
              $alertme.hide();
              switch(pat.text()){
                 case 'Continue':
                     $(".backis").show();
                     $("#sec1").hide();
                     $("#sec2").show();
                     pat.text('Submit');
                    break;
                    case 'Submit':
                        let regBut = $(".subTins");
                        //  let mform = new FormData();
                        //  let fileData = document.getElementById('files').files[0]
                        //  mform.append('names',$("#names").val());
                        //  mform.append('email',$("#email").val());
                        //  mform.append('gender',$("#gender").val());
                        //  mform.append('country',$("#country").val());
                        //  mform.append('pass1',$("#pass1").val());
                        //  mform.append('pass2',$("#pass2").val());
                        //  mform.append('address',$("#address").val());
                        //  mform.append('phone',$("#phone").val());
                        //  mform.append('plan',$("#plan").val());
                        //  mform.append('files',fileData);
                        //  mform.append('authType',$("#authType").val());
                        //  mform.append('refer',$("#refer").val());
                        //  mform.append('hear',$("#hear").val());
              }
      });


      $(".backis").click(function(){
         $(this).hide();
         $(".subTins").text('Continue');
         $("#sec1").show();
         $("#sec2").hide();
      });


      // $("#loginUser").submit(function(e){
      //       e.preventDefault();
      //        let $buts = $(".logintins");
      //         let formDatas = $(this).serialize();
      //          $alertme.hide();
      //          $buts.prop('disabled',true).html('Please wait...');
      //         callAjaxApi($buts,$alertme,'general',formDatas,'Sign In');
      // })

// function callAjaxApi($button,$notify,$type,$formData,$txt){
//         switch($type){
//              case 'general':
//                  $.ajax({
//                     url:link+'control',
//                     type:'POST',
//                     data:$formData,
//                     success:function(res){
//                         setTimeout(function(){
//                                 $notify.html(alertUser('info',res)).show();
//                                 $button.prop('disabled',false).html($txt);
//                         },2000);    
//                     }
//                  });
//                 break;
//                 case 'upload-image':
//                     $.ajax({
//                         url:link+'control',
//                         type:'POST',
//                         data:$formData,
//                         cache: false,
//                         processData: false,
//                         contentType: false,
//                         success:function(res){
//                             setTimeout(function(){
//                                 $notify.html(alertUser('info',res)).show();
//                                 $button.prop('disabled',false).html($txt);
//                             },2000); 
//                         }
//                      });
//                     break;
//         }
// }

$("#with-amt").keyup(function(){
      let uks = $(this).val();
      let bala = $("#bala").val();

      $alertme.hide();

     /* if (!uks.replace(/\s/g, '').length){
         $alertme.html(alertUser('error','White space is not allowed')).show();
      } */
       

        if($(".wstatus").val() === 'active'){

         if(uks > bala){
            $(".withme").prop('disabled',true)
            $alertme.html(alertUser('error','Insufficient fund')).show();
          }else{
                if(uks ==""){
                  $(".withme").prop('disabled',true)
                  $alertme.hide();
                }else{
                  $(".withme").prop('disabled',false)
                  $alertme.hide();
                }
             
        
            }
        }else
        {
         $alertme.html(alertUser('error','Withdrawal permission is not active')).show();
        }
        
      
});


   $(".withme").change(function(){

          let md = $(this).val();
                  $("#wloader").show();
                  $(".bnk").hide();
                  $(".btc").hide();
                  $alertme.hide();
              
                  $(".invt").hide();
            setTimeout(function(){
               $("#wloader").hide();
               switch(md){
                  case 'Bitcoin':
                     $(".mtitle").html('Withdrawal method: bitcoin wallet')
                    $(".bnk").hide();
                    $(".btc").show();
                  
                    $(".invt").show();
                   break;
                 case 'Bank Transfer':
                  $(".mtitle").html('Withdrawal method: bank transfer')
                   $(".bnk").show();
                   $(".btc").hide();
                 
                   $(".invt").show();
                    break;
               
                    default:
                      $(".bnk").hide();
                      $(".btc").hide();
                   
                      $(".invt").hide();
               }

            },2000)
         
   });

   $(".trans").submit(function(e){
         e.preventDefault();
          let formDats = $(this).serialize();
          let $butt = $(".tbut");
            $butt.prop('disabled',true).html('Please wait...');
              let txt ="";
            if($("#txt").val() === 'withdraw'){
                  txt = 'Withdraw';
            }else{
                  txt = 'Deposit';
            }
          callAjaxApi($butt,$alertme,'general',formDats,txt);
   });

                         

   $(".view-user").click(function(){
          let id = $(this).attr('id').replace('view-','');
           let utype = $("#btype-"+id).val();
           
            switch(utype){
                case 'Bank Transfer':
                  $(".bks").show();
                  $(".btcs").hide();
                  $(".det").text('Bank Details');
                    $(".bnk_name").text($("#bk_name-"+id).val());
                    $(".account_name").text($("#acc_name-"+id).val());
                    $(".account_number").text($("#acc_numb-"+id).val());
                  break;
                 case 'Bitcoin':
                  $(".btcs").show();
                  $(".bks").hide();
                  $(".det").text('Bitcoin Details');
                  $(".wid").text($("#wall-"+id).val());
                  break;
            }
          
   })

  


function isNumericKey(e)
{

    if (window.event) { var charCode = window.event.keyCode; }
    else if (e) { var charCode = e.which; }
    else { return true; }
    if (charCode > 31 && (charCode < 48 || charCode > 57)) { return false; }
    return true;
}

function alertUser($type,$msg){
   switch($type){
     case'fine':
       return ` <div class="alert alert-solid alert-success d-flex align-items-center" role="alert">
       
     
            ${$msg}
     
    </div>`;
     break;
     case 'error':
        return ` <div class="alert alert-solid alert-danger d-flex align-items-center" role="alert">
        
     
        ${$msg}
      
     </div>`;
        break;

        case 'info':
            return ` <div class="alert alert-solid alert-primary d-flex align-items-center" role="alert">
            
          
            ${$msg}
         
         </div>`;
            break;
   }
}


      