/**
 * 给定字符串，字符串有且只有每个单词中间隔空格，反转字符串中的每一个单词
 * params str 'let's start go
 * return str s'tel trats og
 */

export default (str) => {
    const temp = str.split(' ');
    const arr = temp.map( (t) => {
        return t.split('').reverse().join('');
    })
    return arr.join(' ')
}