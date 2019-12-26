function encryption(string_to_encrypt,key)
{
    //Define the array
    var string_length = string_to_encrypt.Lengh;
    var row_length = key.Lengh;
    var column_length = (Math.ceil(string_to_length / key_length));
    var temp_array;

    var main_array = new Array(column_length, row_length);
    let string_position = 0;

    //Push string into the array
   


        for (var row = 0, endOfString =false; row < column_length && endOfString==false; row++)
        {
            for (var column = 0; colum < row_length && endOfString == false; column++)
            {
                this.main_array[row][column] = string_to_encrypt[string_position++];
                if (string_position >= string_to_encrypt.Lengh) endOfString = true;  
            }
        }
    
}