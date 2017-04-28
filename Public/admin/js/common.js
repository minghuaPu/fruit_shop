

$(function  () {
$('[data-toggle="ajax_edit"]').click(function  () {
	// 标识当前节点是不是处于编辑状态
	

	var has_editing=$(this).attr("has_editing");

	console.log(has_editing);


	if (has_editing!=1) {

		// 自己创造一个状态属性
		$(this).attr("has_editing",1);
		// 之前的值
		var old_val=$(this).html();
		$(this).html("<input value='"+old_val+"' />");

		// 聚焦
		$(this).find("input").focus();

	}else{

		// 处于编辑状态
	}
	

})

// 如果修改完了
// 一种就是点击输入框以外的区域

 // blur 失去焦点
 $('[data-toggle="ajax_edit"]').on("blur","input",function  () {
 	// 传当前Input的父节点，进行复原
 	 resetEdit($(this).parent());
 })


// 按一下回车
$(document).keydown(function  (event) {
	 
	if (event.keyCode==13) {
		// 把所有data-toggle="ajax_edit 属性的标签处于编辑状态的输入框进行提交
		$('[data-toggle="ajax_edit"][has_editing="1"]').each(function  () {
		
			// 把当前节点复原
			resetEdit($(this));
			 
		})
	}
	})
	// 复原ajax编辑
	function resetEdit (this_edit_obj) {
		 // 提交修改
		 ajax_do(this_edit_obj);

		 var new_val=this_edit_obj.find("input").val()
				
		 this_edit_obj.html(new_val);
		 this_edit_obj.attr("has_editing","");

	}
	// 提交
			// jQuery
	function ajax_do (this_edit_obj) {
		 	var key=this_edit_obj.parent().attr('data-id');//parent==tr 
			var value=this_edit_obj.find("input").val();
			var data_colmun=this_edit_obj.attr("data-colmun");

			$.post(ajax_url,{ key,value,data_colmun,controller },function  (rtn_data) {

				// tips:TP框架的ajaxReturn 回来的，不需要使用JSON.parese();

				 // 进行动态的警示信息提醒
				
				$("#msg_box").removeClass('hide').html(rtn_data.msg);
				window.setTimeout(function(){
				   $("#msg_box").addClass('hide');
				},2000);
			})
	}
})

