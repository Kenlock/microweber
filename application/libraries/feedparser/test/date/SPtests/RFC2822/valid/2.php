<?php

class SimplePie_Date_Test_RFC2822_2 extends SimplePie_Date_Test
{
	function data()
	{
		$this->data = '05 Nov 94 13:15:30 GMT';
	}
	
	function expected()
	{
		$this->expected = 784041330;
	}
}

?>