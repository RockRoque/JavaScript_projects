function dynamicdropdown(listindex)
        {
            document.getElementById("subcategory").length = 0;
            switch (listindex)
            {
                case "quarterly" :
                    document.getElementById("subcategory").options[0]=new Option("Select filing frequency","");
                    document.getElementById("subcategory").options[1]=new Option("January - March","January - March");
                    document.getElementById("subcategory").options[2]=new Option("April - June","April - June");
                    document.getElementById("subcategory").options[3]=new Option("July - September","July - September");
                    document.getElementById("subcategory").options[4]=new Option("October - December","October - December");
                    break;

                case "semi" :
                    document.getElementById("subcategory").options[0]=new Option("Select filing frequency","");
                    document.getElementById("subcategory").options[1]=new Option("1/1 - 1/15","1/1 - 1/15");
                    document.getElementById("subcategory").options[2]=new Option("1/16 - 1/31","1/16 - 1/31");
                    document.getElementById("subcategory").options[3]=new Option("2/1 - 2/15","2/1 - 2/15");
                    document.getElementById("subcategory").options[4]=new Option("2/16 - 2/28 or 2/29","2/16 - 2/28 or 2/29");
                    document.getElementById("subcategory").options[5]=new Option("3/1 - 3/15","3/1 - 3/15");
                    document.getElementById("subcategory").options[6]=new Option("3/16 - 3/31","3/16 - 3/31");
                    document.getElementById("subcategory").options[7]=new Option("4/1 - 4/15","4/1 - 4/15");
                    document.getElementById("subcategory").options[8]=new Option("4/16 - 4/30","4/16 - 4/30");
                    document.getElementById("subcategory").options[9]=new Option("5/1 - 5/15","5/1 - 5/15");
                    document.getElementById("subcategory").options[10]=new Option("5/16 - 5/31","5/16 - 5/31");
                    document.getElementById("subcategory").options[11]=new Option("6/1 - 6/15","6/1 - 6/15");
                    document.getElementById("subcategory").options[12]=new Option("6/16 - 6/30","6/16 - 6/30");
                    document.getElementById("subcategory").options[13]=new Option("7/1 - 7/15","7/1 - 7/15");
                    document.getElementById("subcategory").options[14]=new Option("7/16 - 7/31","7/16 - 7/31");
                    document.getElementById("subcategory").options[15]=new Option("8/1 - 8/15","8/1 - 8/15");
                    document.getElementById("subcategory").options[16]=new Option("8/16 - 8/31","8/16 - 8/31");
                    document.getElementById("subcategory").options[17]=new Option("9/1 - 9/15","9/1 - 9/15");
                    document.getElementById("subcategory").options[18]=new Option("9/16 - 9/25 Non-EFT","9/16 - 9/25 Non-EFT");
                    document.getElementById("subcategory").options[19]=new Option("9/16 - 9/26 EFT","9/16 - 9/26 EFT");
                    document.getElementById("subcategory").options[20]=new Option("9/26 - 9/30 Non-EFT","9/26 - 9/30 Non-EFT");
                    document.getElementById("subcategory").options[21]=new Option("9/27 - 9/30 EFT","9/27 - 9/30 EFT");
                    document.getElementById("subcategory").options[22]=new Option("10/1 - 10/15","10/1 - 10/15");
                    document.getElementById("subcategory").options[23]=new Option("10/16 - 10/31","10/16 - 10/31");
                    document.getElementById("subcategory").options[24]=new Option("11/1 - 11/15","11/1 - 11/15");
                    document.getElementById("subcategory").options[25]=new Option("11/16 - 11/30","11/16 - 11/30");
                    document.getElementById("subcategory").options[26]=new Option("12/1 - 12/15","12/1 - 12/15");
                    document.getElementById("subcategory").options[27]=new Option("12/16 - 12/31","12/16 - 12/31");
                    break;

            }
            return true;
        }
