function reset(target){
  let this_form  = target.closest('form');
  this_form.reset();
}

function open_modal(target){
  const modal = document.querySelector('.modal.'+target+'');
  modal.classList.add('on');
}

function close_modal(target){
  const modal = target.closest('.modal');
  modal.classList.remove('on');
}

function close_toast(target){
  const toast = target.closest('.toast');
  toast.classList.remove('on');
}


function upload(e){
                            
  let val = e.value;
  let uploadSet = e.closest('.uploadSet');
  let upload_input = uploadSet.querySelector('.upload_input');
  upload_input.value = val;
}


