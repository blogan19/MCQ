function toastC(){
		toastr.options = {
		  "closeButton": false,
		  "debug": false,
		  "newestOnTop": false,
		  "progressBar": false,
		  "positionClass": "toast-bottom-center",
		  "preventDuplicates": true,
		  "onclick": null,
		  "showDuration": "100",
		  "hideDuration": "1000",
		  "timeOut": "1000",
		  "extendedTimeOut": "1000",
		  "showEasing": "swing",
		  "hideEasing": "linear",
		  "showMethod": "fadeIn",
		  "hideMethod": "fadeOut"
		}
		toastr.success('Correct');
		
	}
function toastI(){
		toastr.options = {
		  "closeButton": false,
		  "debug": false,
		  "newestOnTop": false,
		  "progressBar": false,
		  "positionClass": "toast-bottom-center",
		  "preventDuplicates":true,
		  "onclick": null,
		  "showDuration": "100",
		  "hideDuration": "1000",
		  "timeOut": "1000",
		  "extendedTimeOut": "1000",
		  "showEasing": "swing",
		  "hideEasing": "linear",
		  "showMethod": "fadeIn",
		  "hideMethod": "fadeOut"
		}
		toastr.error('Incorrect');
	
	}

function  toastnewHS(){
		toastr.options = {
		  "closeButton": false,
		  "debug": false,
		  "newestOnTop": false,
		  "progressBar": false,
		  "positionClass": "toast-bottom-full-width",
		  "preventDuplicates": false,
		  "onclick": null,
		  "showDuration": "10000",
		  "hideDuration": "1000",
		  "timeOut": "10000",
		  "extendedTimeOut": "1000",
		  "showEasing": "swing",
		  "hideEasing": "linear",
		  "showMethod": "fadeIn",
		  "hideMethod": "fadeOut"
		}
		toastr.success('New High Score');
	
	}

function  newStreak(){
		toastr.options = {
		  "closeButton": false,
		  "debug": false,
		  "newestOnTop": false,
		  "progressBar": false,
		  "positionClass": "toast-top-full-width",
		  "preventDuplicates": false,
		  "onclick": null,
		  "showDuration": "1000",
		  "hideDuration": "1000",
		  "timeOut": "1000",
		  "extendedTimeOut": "1000",
		  "showEasing": "swing",
		  "hideEasing": "linear",
		  "showMethod": "fadeIn",
		  "hideMethod": "fadeOut"
		}
		toastr.success('<h1>New Highest Streak Achieved!</h1>');
	
	}
function toastI2(){
		toastr.options = {
		  "closeButton": false,
		  "debug": false,
		  "newestOnTop": false,
		  "progressBar": false,
		  "positionClass": "toast-bottom-center",
		  "preventDuplicates":true,
		  "onclick": null,
		  "showDuration": "100",
		  "hideDuration": "1000",
		  "timeOut": "1500",
		  "extendedTimeOut": "1000",
		  "showEasing": "swing",
		  "hideEasing": "linear",
		  "showMethod": "fadeIn",
		  "hideMethod": "fadeOut"
		}
		toastr.error(incorrectFeedback);
	
	}