#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Date    : 2017-03-10 22:33:36
# @Author  : Joe Jiang (hijiangtao@gmail.com)
# @Link    : https://hijiangtao.github.io/
# @Version : $Id$

class Solution(object):
    def solve(self, board):
        """
        :type board: List[List[str]]
        :rtype: void Do not return anything, modify board in-place instead.
        """
        
        if len(board) == 0:
        	return 0

        rowlen = len(board)
        collen = len(board[0])
        rowecp = rowlen-1
        colecp = collen-1

        for i in xrange(0,collen):
        	self.judZero(0, i, rowlen, collen, board)
        	self.judZero(rowecp, i, rowlen, collen, board)

        for i in xrange(1,rowecp):
        	self.judZero(i, 0, rowlen, collen, board)
        	self.judZero(i, colecp, rowlen, collen, board)

        for x in xrange(0,rowlen):
        	for y in xrange(0,collen):
        		if board[x][y] == '1':
        			board[x][y] = 'O'
        		if board[x][y] == 'O':
        			board[x][y] = 'X'

    def judZero(self, x, y, rowlen, collen, matrix):
    	if matrix[x][y] !== 'O':
        	return 0	

        matrix[x][y] = '1'

        if x-1 >= 0:
        	self.judZero(x-1, y, rowlen, collen, matrix)
	    if x+1 < rowlen:
        	self.judZero(x+1, y, rowlen, collen, matrix)
	    if y-1 >= 0:
        	self.judZero(x, y-1, rowlen, collen, matrix)
        if y+1 < collen:
        	self.judZero(x, y+1, rowlen, collen, matrix)