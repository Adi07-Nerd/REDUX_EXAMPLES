function longestPalindrome(s: string): string {
    let arr_input = s.split('');
    let result = arr_input.reduce((acc,curr_val,curr_index,old_string) => {
        
        if(acc.length > old_string.length - curr_index) old_string.splice(1)
        return acc
    },'')
    return result
};