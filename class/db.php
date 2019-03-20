<?php
/*
by chenxuan 20140511
*/
class db{
	var $server=array(
		'host' => '127.0.0.1',
		'account' => 'myroot',
		'password' => 'theh3Fty845',
		'dbname' => 'zty_byi2014'
	);
	var $sqlSocket;
	var $sqlWorld='';
	var $sqlPath;
	function db(){
		$this->sqlSocket=mysql_connect(
			$this->server['host'],
			$this->server['account'],
			$this->server['password']
		);
		mysql_select_db($this->server['dbname'],$this->sqlSocket);
		mysql_query('SET NAMES UTF8');
	}
	function table($_v){
		$this->sqlPath['table']=$_v;
		return $this;
	}
	function where($_v){
		$this->sqlPath['where']=$_v;
		return $this;
	}
	function getData(){
		$a=mysql_query($this->sqlWorld);
		$finallyRead=array();
		$countIndex=0;
		while($read=@mysql_fetch_array($a)){
			$finallyRead[$countIndex]=$read;
			$countIndex++;
		}
		if(count($finallyRead)==0){
			return null;
		}
		return $finallyRead;
	}
	function add($_array){
		$keyString='';
		$valueString='';
		foreach ($_array as $key => $value) {
			$keyString.='`'.$key.'`,';
			$valueString.=(is_string($value)?("'$value'"):$value).',';
		}
		$keyString=substr($keyString, 0,mb_strlen($keyString)-1);
		$valueString=substr($valueString, 0,mb_strlen($valueString)-1);
		$this->sqlWorld='INSERT INTO `'.$this->sqlPath['table'].'` ('.$keyString.') VALUES ('.$valueString.')' ;
		// trace($this->sqlWorld);
		mysql_query($this->sqlWorld);
		return mysql_insert_id();
	}
	function getSqlPathOrNot($pathName,$instead=''){
		if(isset($this->sqlPath[$pathName])){
			return $this->sqlPath[$pathName];
		}
		return $instead;
	}
	function limit($start=0,$Length=5){
		$this->sqlPath['limit']="LIMIT $start , $Length";
		return $this;
	}
	function orderBy($_word){
		$this->sqlPath['orderBy']="ORDER BY $_word";
		return $this;
	}
	function select(){
		$table=$this->getSqlPathOrNot('table');
		$where=$this->getSqlPathOrNot('where','1');
		$limit=$this->getSqlPathOrNot('limit');
		$orderBy=$this->getSqlPathOrNot('orderBy');
		$this->sqlWorld='SELECT * FROM  `'.$table.'` where '.$where.' '.$orderBy.' '.$limit;
		return $this->getData();
	}
}