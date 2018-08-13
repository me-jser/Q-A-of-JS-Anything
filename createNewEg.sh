#!/bin/bash
echo Hello, please input the new issue?
read issueName
mkdir  $issueName && cd $issueName
touch $issueName.exmple.html $issueName.exmple.js
echo $issueName > README.MD
echo create $issueName finished