 $(function() {
 	/*$(window).resize(function(){*/
 		console.log('ban vừa thay đổi cửa trình duyệt ');
 		if ($(window).width()< 576) {
 			$('.menutop ul li ul').slideUp();
 		}
 	/*});*/
 	$('.navbar-toggleable-xs .navbar-nav .nav-item').bind('touchstart',function(){
 		$(this).children('ul').slideToggle(400);
 	});
 	/*jquery cho phần hiệu ứng */
 	$('ul.tdtab li b').click(function(){
 		//khi click vào thằng thẻ b ,this chính là thằng được kích ,kích vào thằng nào thằng active ,
 		//kích vào thằng nao chỉ thằng đo activ thôi còn mấy cái khác không nên trước khia ctive phải 
 		//bỏ tehr b đi đổi class là đổi hiệu ứng đoi hieu ứng chính là đổi giao diện
 		$('ul.tdtab li b').removeClass('active');
 		$(this).addClass('active');
 		chiso=$(this).parents().index()+1;
 		console.log(chiso);
 		$('ul.ndtab li .divsanpham').removeClass('xuathien');
 		$('ul.ndtab li:nth-child('+chiso+") .divsanpham").addClass('xuathien');
 		console.log('Div'+chiso+"xuat hien");
 		console.log('ul.ndtab li:nth-child('+chiso+") .divsanpham");

 		//khi kích vào thằng b mình sử dụng this,,this là thằng thẻ b nó là con của li ,li thì mới sắp xếp 
 		//theo hàng ,li trong ul có 4 thằng con làm sao biết thằng con số mấy thì mình sẽ chấm parents()
 		//parent là bố của b chính là li,để biết được hàm số mấy mình sẽ dùng hàm index ,và dòng này
 		//$(this).parents().index() chính là viết ra chỉ số của thằng hàm console.log('chiso'); là đẻ
 		//in ra màn hình còn this chính là thẻ b,index chính là số thứ tự của liex là kích vào thằng
 		// nào là nó biết đang ở số mấy nhưng nếu tính từ 0 nghe ko hợp lý mấy nên sẽ cộng với 1,nhờ hàm
 		// index biết được số mấy sau khi biết chỉ số tương úng rồi mình sẽ cho nội dung tương ứng hiển
 		// thị để cho nội dung hiên thi dau tiên cho nội dung biến mất 
 		// $('ul.ndtab li .divsanpham').removeClass('xuathien');giờ kich vào để nó xuất hiện 
 		// console.log('Div'+chiso+"xuat hien");mọt câu lệnh gồm 3 phàn tử như đó 
 		// console.log('ul.ndtab li:nth-child('+chiso+") .divsanpham"); câu lệnh này nó chỉ ra rằng
 		// thằng nào sẽ xuất hiện nhờ lấy được chỉ số sau khi biết rồi mình sẽ 



 	});
 	/*hiêu úng cuộn chuột*/  
 	new WOW().init();
 	 });