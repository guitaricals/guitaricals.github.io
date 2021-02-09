i=0

x_pos= ["one_zero","one_one","one_two","one_three","one_four","one_five","one_six","one_seven",
"one_eight","one_nine","one_ten","one_eleven","one_twelve","one_thirteen","one_fourteen","one_fifteen",
"one_sixteen","one_seventeen","one_eighteen","one_nineteen","one_twenty","one_twentyone","2_one_zero","2_one_one",
"2_one_two","2_one_three","2_one_four","2_one_five","2_one_six","2_one_seven","2_one_eight","2_one_nine","2_one_ten",
"2_one_eleven","2_one_twelve","2_one_thirteen","2_one_fourteen","2_one_fifteen","2_one_sixteen","2_one_seventeen",
"2_one_eighteen","2_one_nineteen","2_one_twenty","2_one_twentyone","3_one_zero","3_one_one","3_one_two","3_one_three","3_one_four","3_one_five",
"3_one_six","3_one_seven","3_one_eight","3_one_nine","3_one_ten","3_one_eleven",
"3_one_twelve","3_one_thirteen","3_one_fourteen","3_one_fifteen","3_one_sixteen","3_one_seventeen",
"3_one_eighteen","3_one_nineteen","3_one_twenty","3_one_twentyone",
"4_one_zero","4_one_one","4_one_two","4_one_three","4_one_four","4_one_five",
"4_one_six","4_one_seven","4_one_eight","4_one_nine","4_one_ten","4_one_eleven",
"4_one_twelve","4_one_thirteen","4_one_fourteen","4_one_fifteen","4_one_sixteen","4_one_seventeen",
"4_one_eighteen","4_one_nineteen","4_one_twenty","4_one_twentyone",
"5_one_zero","5_one_one","5_one_two","5_one_three","5_one_four","5_one_five",
"5_one_six","5_one_seven","5_one_eight","5_one_nine","5_one_ten","5_one_eleven",
"5_one_twelve","5_one_thirteen","5_one_fourteen","5_one_fifteen","5_one_sixteen","5_one_seventeen",
"5_one_eighteen","5_one_nineteen","5_one_twenty","5_one_twentyone",
"6_one_zero","6_one_one","6_one_two","6_one_three","6_one_four","6_one_five",
"6_one_six","6_one_seven","6_one_eight","6_one_nine","6_one_ten","6_one_eleven",
"6_one_twelve","6_one_thirteen","6_one_fourteen","6_one_fifteen","6_one_sixteen","6_one_seventeen",
"6_one_eighteen","6_one_nineteen","6_one_twenty","6_one_twentyone",
"7_one_zero","7_one_one","7_one_two","7_one_three","7_one_four","7_one_five",
"7_one_six","7_one_seven","7_one_eight","7_one_nine","7_one_ten","7_one_eleven",
"7_one_twelve","7_one_thirteen","7_one_fourteen","7_one_fifteen","7_one_sixteen","7_one_seventeen",
"7_one_eighteen","7_one_nineteen","7_one_twenty","7_one_twentyone",
"8_one_zero","8_one_one","8_one_two","8_one_three","8_one_four","8_one_five",
"8_one_six","8_one_seven","8_one_eight","8_one_nine","8_one_ten","8_one_eleven",
"8_one_twelve","8_one_thirteen","8_one_fourteen","8_one_fifteen","8_one_sixteen","8_one_seventeen",
"8_one_eighteen","8_one_nineteen","8_one_twenty","8_one_twentyone",
"9_one_zero","9_one_one","9_one_two","9_one_three","9_one_four","9_one_five",
"9_one_six","9_one_seven","9_one_eight","9_one_nine","9_one_ten","9_one_eleven",
"9_one_twelve","9_one_thirteen","9_one_fourteen","9_one_fifteen","9_one_sixteen","9_one_seventeen",
"9_one_eighteen","9_one_nineteen","9_one_twenty","9_one_twentyone",
"10_one_zero","10_one_one","10_one_two","10_one_three","10_one_four","10_one_five",
"10_one_six","10_one_seven","10_one_eight","10_one_nine","10_one_ten","10_one_eleven",
"10_one_twelve","10_one_thirteen","10_one_fourteen","10_one_fifteen","10_one_sixteen","10_one_seventeen",
"10_one_eighteen","10_one_nineteen","10_one_twenty","10_one_twentyone",
"11_one_zero","11_one_one","11_one_two","11_one_three","11_one_four","11_one_five",
"11_one_six","11_one_seven","11_one_eight","11_one_nine","11_one_ten","11_one_eleven",
"11_one_twelve","11_one_thirteen","11_one_fourteen","11_one_fifteen","11_one_sixteen","11_one_seventeen",
"11_one_eighteen","11_one_nineteen","11_one_twenty","11_one_twentyone",
"12_one_zero","12_one_one","12_one_two","12_one_three","12_one_four","12_one_five",
"12_one_six","12_one_seven","12_one_eight","12_one_nine","12_one_ten","12_one_eleven",
"12_one_twelve","12_one_thirteen","12_one_fourteen","12_one_fifteen","12_one_sixteen","12_one_seventeen",
"12_one_eighteen","12_one_nineteen","12_one_twenty","12_one_twentyone",
"13_one_zero","13_one_one","13_one_two","13_one_three","13_one_four","13_one_five",
"13_one_six","13_one_seven","13_one_eight","13_one_nine","13_one_ten","13_one_eleven",
"13_one_twelve","13_one_thirteen","13_one_fourteen","13_one_fifteen","13_one_sixteen","13_one_seventeen",
"13_one_eighteen","13_one_nineteen","13_one_twenty","13_one_twentyone",
"14_one_zero","14_one_one","14_one_two","14_one_three","14_one_four","14_one_five",
"14_one_six","14_one_seven","14_one_eight","14_one_nine","14_one_ten","14_one_eleven",
"14_one_twelve","14_one_thirteen","14_one_fourteen","14_one_fifteen","14_one_sixteen","14_one_seventeen",
"14_one_eighteen","14_one_nineteen","14_one_twenty","14_one_twentyone",
"15_one_zero","15_one_one","15_one_two","15_one_three","15_one_four","15_one_five",
"15_one_six","15_one_seven","15_one_eight","15_one_nine","15_one_ten","15_one_eleven",
"15_one_twelve","15_one_thirteen","15_one_fourteen","15_one_fifteen","15_one_sixteen","15_one_seventeen",
"15_one_eighteen","15_one_nineteen","15_one_twenty","15_one_twentyone",
"16_one_zero","16_one_one","16_one_two","16_one_three","16_one_four","16_one_five",
"16_one_six","16_one_seven","16_one_eight","16_one_nine","16_one_ten","16_one_eleven",
"16_one_twelve","16_one_thirteen","16_one_fourteen","16_one_fifteen","16_one_sixteen","16_one_seventeen",
"16_one_eighteen","16_one_nineteen","16_one_twenty","16_one_twentyone",
"17_one_zero","17_one_one","17_one_two","17_one_three","17_one_four","17_one_five",
"17_one_six","17_one_seven","17_one_eight","17_one_nine","17_one_ten","17_one_eleven",
"17_one_twelve","17_one_thirteen","17_one_fourteen","17_one_fifteen","17_one_sixteen","17_one_seventeen",
"17_one_eighteen","17_one_nineteen","17_one_twenty","17_one_twentyone",
"18_one_zero","18_one_one","18_one_two","18_one_three","18_one_four","18_one_five",
"18_one_six","18_one_seven","18_one_eight","18_one_nine","18_one_ten","18_one_eleven",
"18_one_twelve","18_one_thirteen","18_one_fourteen","18_one_fifteen","18_one_sixteen","18_one_seventeen",
"18_one_eighteen","18_one_nineteen","18_one_twenty","18_one_twentyone",
"19_one_zero","19_one_one","19_one_two","19_one_three","19_one_four","19_one_five",
"19_one_six","19_one_seven","19_one_eight","19_one_nine","19_one_ten","19_one_eleven",
"19_one_twelve","19_one_thirteen","19_one_fourteen","19_one_fifteen","19_one_sixteen","19_one_seventeen",
"19_one_eighteen","19_one_nineteen","19_one_twenty","19_one_twentyone",
"20_one_zero","20_one_one","20_one_two","20_one_three","20_one_four","20_one_five",
"20_one_six","20_one_seven","20_one_eight","20_one_nine","20_one_ten","20_one_eleven",
"20_one_twelve","20_one_thirteen","20_one_fourteen","20_one_fifteen","20_one_sixteen","20_one_seventeen",
"20_one_eighteen","20_one_nineteen","20_one_twenty","20_one_twentyone"]

x_pos2=["two_zero","two_one","two_two","two_three","two_four","two_five","two_six","two_seven",
"two_eight","two_nine","two_ten","two_eleven","two_twelve","two_thirteen","two_fourteen","two_fifteen",
"two_sixteen","two_seventeen","two_eighteen","two_nineteen","two_twenty","two_twentyone","2_two_zero","2_two_one",
"2_two_two","2_two_three","2_two_four","2_two_five","2_two_six","2_two_seven","2_two_eight","2_two_nine","2_two_ten",
"2_two_eleven","2_two_twelve","2_two_thirteen","2_two_fourteen","2_two_fifteen","2_two_sixteen","2_two_seventeen",
"2_two_eighteen","2_two_nineteen","2_two_twenty","2_two_twentyone","3_two_zero","3_two_one","3_two_two","3_two_three","3_two_four","3_two_five",
"3_two_six","3_two_seven","3_two_eight","3_two_nine","3_two_ten","3_two_eleven",
"3_two_twelve","3_two_thirteen","3_two_fourteen","3_two_fifteen","3_two_sixteen","3_two_seventeen",
"3_two_eighteen","3_two_nineteen","3_two_twenty","3_two_twentyone",
"4_two_zero","4_two_one","4_two_two","4_two_three","4_two_four","4_two_five",
"4_two_six","4_two_seven","4_two_eight","4_two_nine","4_two_ten","4_two_eleven",
"4_two_twelve","4_two_thirteen","4_two_fourteen","4_two_fifteen","4_two_sixteen","4_two_seventeen",
"4_two_eighteen","4_two_nineteen","4_two_twenty","4_two_twentyone",
"5_two_zero","5_two_one","5_two_two","5_two_three","5_two_four","5_two_five",
"5_two_six","5_two_seven","5_two_eight","5_two_nine","5_two_ten","5_two_eleven",
"5_two_twelve","5_two_thirteen","5_two_fourteen","5_two_fifteen","5_two_sixteen","5_two_seventeen",
"5_two_eighteen","5_two_nineteen","5_two_twenty","5_two_twentyone",
"6_two_zero","6_two_one","6_two_two","6_two_three","6_two_four","6_two_five",
"6_two_six","6_two_seven","6_two_eight","6_two_nine","6_two_ten","6_two_eleven",
"6_two_twelve","6_two_thirteen","6_two_fourteen","6_two_fifteen","6_two_sixteen","6_two_seventeen",
"6_two_eighteen","6_two_nineteen","6_two_twenty","6_two_twentyone",
"7_two_zero","7_two_one","7_two_two","7_two_three","7_two_four","7_two_five",
"7_two_six","7_two_seven","7_two_eight","7_two_nine","7_two_ten","7_two_eleven",
"7_two_twelve","7_two_thirteen","7_two_fourteen","7_two_fifteen","7_two_sixteen","7_two_seventeen",
"7_two_eighteen","7_two_nineteen","7_two_twenty","7_two_twentyone",
"8_two_zero","8_two_one","8_two_two","8_two_three","8_two_four","8_two_five",
"8_two_six","8_two_seven","8_two_eight","8_two_nine","8_two_ten","8_two_eleven",
"8_two_twelve","8_two_thirteen","8_two_fourteen","8_two_fifteen","8_two_sixteen","8_two_seventeen",
"8_two_eighteen","8_two_nineteen","8_two_twenty","8_two_twentyone",
"9_two_zero","9_two_one","9_two_two","9_two_three","9_two_four","9_two_five",
"9_two_six","9_two_seven","9_two_eight","9_two_nine","9_two_ten","9_two_eleven",
"9_two_twelve","9_two_thirteen","9_two_fourteen","9_two_fifteen","9_two_sixteen","9_two_seventeen",
"9_two_eighteen","9_two_nineteen","9_two_twenty","9_two_twentyone",
"10_two_zero","10_two_one","10_two_two","10_two_three","10_two_four","10_two_five",
"10_two_six","10_two_seven","10_two_eight","10_two_nine","10_two_ten","10_two_eleven",
"10_two_twelve","10_two_thirteen","10_two_fourteen","10_two_fifteen","10_two_sixteen","10_two_seventeen",
"10_two_eighteen","10_two_nineteen","10_two_twenty","10_two_twentyone",
"11_two_zero","11_two_one","11_two_two","11_two_three","11_two_four","11_two_five",
"11_two_six","11_two_seven","11_two_eight","11_two_nine","11_two_ten","11_two_eleven",
"11_two_twelve","11_two_thirteen","11_two_fourteen","11_two_fifteen","11_two_sixteen","11_two_seventeen",
"11_two_eighteen","11_two_nineteen","11_two_twenty","11_two_twentyone",
"12_two_zero","12_two_one","12_two_two","12_two_three","12_two_four","12_two_five",
"12_two_six","12_two_seven","12_two_eight","12_two_nine","12_two_ten","12_two_eleven",
"12_two_twelve","12_two_thirteen","12_two_fourteen","12_two_fifteen","12_two_sixteen","12_two_seventeen",
"12_two_eighteen","12_two_nineteen","12_two_twenty","12_two_twentyone",
"13_two_zero","13_two_one","13_two_two","13_two_three","13_two_four","13_two_five",
"13_two_six","13_two_seven","13_two_eight","13_two_nine","13_two_ten","13_two_eleven",
"13_two_twelve","13_two_thirteen","13_two_fourteen","13_two_fifteen","13_two_sixteen","13_two_seventeen",
"13_two_eighteen","13_two_nineteen","13_two_twenty","13_two_twentyone",
"14_two_zero","14_two_one","14_two_two","14_two_three","14_two_four","14_two_five",
"14_two_six","14_two_seven","14_two_eight","14_two_nine","14_two_ten","14_two_eleven",
"14_two_twelve","14_two_thirteen","14_two_fourteen","14_two_fifteen","14_two_sixteen","14_two_seventeen",
"14_two_eighteen","14_two_nineteen","14_two_twenty","14_two_twentyone",
"15_two_zero","15_two_one","15_two_two","15_two_three","15_two_four","15_two_five",
"15_two_six","15_two_seven","15_two_eight","15_two_nine","15_two_ten","15_two_eleven",
"15_two_twelve","15_two_thirteen","15_two_fourteen","15_two_fifteen","15_two_sixteen","15_two_seventeen",
"15_two_eighteen","15_two_nineteen","15_two_twenty","15_two_twentyone",
"16_two_zero","16_two_one","16_two_two","16_two_three","16_two_four","16_two_five",
"16_two_six","16_two_seven","16_two_eight","16_two_nine","16_two_ten","16_two_eleven",
"16_two_twelve","16_two_thirteen","16_two_fourteen","16_two_fifteen","16_two_sixteen","16_two_seventeen",
"16_two_eighteen","16_two_nineteen","16_two_twenty","16_two_twentyone",
"17_two_zero","17_two_one","17_two_two","17_two_three","17_two_four","17_two_five",
"17_two_six","17_two_seven","17_two_eight","17_two_nine","17_two_ten","17_two_eleven",
"17_two_twelve","17_two_thirteen","17_two_fourteen","17_two_fifteen","17_two_sixteen","17_two_seventeen",
"17_two_eighteen","17_two_nineteen","17_two_twenty","17_two_twentyone",
"18_two_zero","18_two_one","18_two_two","18_two_three","18_two_four","18_two_five",
"18_two_six","18_two_seven","18_two_eight","18_two_nine","18_two_ten","18_two_eleven",
"18_two_twelve","18_two_thirteen","18_two_fourteen","18_two_fifteen","18_two_sixteen","18_two_seventeen",
"18_two_eighteen","18_two_nineteen","18_two_twenty","18_two_twentyone",
"19_two_zero","19_two_one","19_two_two","19_two_three","19_two_four","19_two_five",
"19_two_six","19_two_seven","19_two_eight","19_two_nine","19_two_ten","19_two_eleven",
"19_two_twelve","19_two_thirteen","19_two_fourteen","19_two_fifteen","19_two_sixteen","19_two_seventeen",
"19_two_eighteen","19_two_nineteen","19_two_twenty","19_two_twentyone",
"20_two_zero","20_two_one","20_two_two","20_two_three","20_two_four","20_two_five",
"20_two_six","20_two_seven","20_two_eight","20_two_nine","20_two_ten","20_two_eleven",
"20_two_twelve","20_two_thirteen","20_two_fourteen","20_two_fifteen","20_two_sixteen","20_two_seventeen",
"20_two_eighteen","20_two_nineteen","20_two_twenty","20_two_twentyone"]

x_pos3=["three_zero","three_one","three_two","three_three","three_four","three_five","three_six",
"three_seven","three_eight","three_nine","three_ten","three_eleven","three_twelve","three_thirteen",
"three_fourteen","three_fifteen","three_sixteen","three_seventeen","three_eighteen","three_nineteen",
"three_twenty","three_twentyone","2_three_zero","2_three_one","2_three_two","2_three_three","2_three_four",
"2_three_five","2_three_six","2_three_seven","2_three_eight","2_three_nine","2_three_ten","2_three_eleven","2_three_twelve","2_three_thirteen",
"2_three_fourteen","2_three_fifteen","2_three_sixteen","2_three_seventeen","2_three_eighteen","2_three_nineteen","2_three_twenty","2_three_twentyone",
"3_three_zero","3_three_one","3_three_two","3_three_three","3_three_four","3_three_five",
"3_three_six","3_three_seven","3_three_eight","3_three_nine","3_three_ten","3_three_eleven",
"3_three_twelve","3_three_thirteen","3_three_fourteen","3_three_fifteen","3_three_sixteen","3_three_seventeen",
"3_three_eighteen","3_three_nineteen","3_three_twenty","3_three_twentyone",
"4_three_zero","4_three_one","4_three_two","4_three_three","4_three_four","4_three_five",
"4_three_six","4_three_seven","4_three_eight","4_three_nine","4_three_ten","4_three_eleven",
"4_three_twelve","4_three_thirteen","4_three_fourteen","4_three_fifteen","4_three_sixteen","4_three_seventeen",
"4_three_eighteen","4_three_nineteen","4_three_twenty","4_three_twentyone",
"5_three_zero","5_three_one","5_three_two","5_three_three","5_three_four","5_three_five",
"5_three_six","5_three_seven","5_three_eight","5_three_nine","5_three_ten","5_three_eleven",
"5_three_twelve","5_three_thirteen","5_three_fourteen","5_three_fifteen","5_three_sixteen","5_three_seventeen",
"5_three_eighteen","5_three_nineteen","5_three_twenty","5_three_twentyone",
"6_three_zero","6_three_one","6_three_two","6_three_three","6_three_four","6_three_five",
"6_three_six","6_three_seven","6_three_eight","6_three_nine","6_three_ten","6_three_eleven",
"6_three_twelve","6_three_thirteen","6_three_fourteen","6_three_fifteen","6_three_sixteen","6_three_seventeen",
"6_three_eighteen","6_three_nineteen","6_three_twenty","6_three_twentyone",
"7_three_zero","7_three_one","7_three_two","7_three_three","7_three_four","7_three_five",
"7_three_six","7_three_seven","7_three_eight","7_three_nine","7_three_ten","7_three_eleven",
"7_three_twelve","7_three_thirteen","7_three_fourteen","7_three_fifteen","7_three_sixteen","7_three_seventeen",
"7_three_eighteen","7_three_nineteen","7_three_twenty","7_three_twentyone",
"8_three_zero","8_three_one","8_three_two","8_three_three","8_three_four","8_three_five",
"8_three_six","8_three_seven","8_three_eight","8_three_nine","8_three_ten","8_three_eleven",
"8_three_twelve","8_three_thirteen","8_three_fourteen","8_three_fifteen","8_three_sixteen","8_three_seventeen",
"8_three_eighteen","8_three_nineteen","8_three_twenty","8_three_twentyone",
"9_three_zero","9_three_one","9_three_two","9_three_three","9_three_four","9_three_five",
"9_three_six","9_three_seven","9_three_eight","9_three_nine","9_three_ten","9_three_eleven",
"9_three_twelve","9_three_thirteen","9_three_fourteen","9_three_fifteen","9_three_sixteen","9_three_seventeen",
"9_three_eighteen","9_three_nineteen","9_three_twenty","9_three_twentyone",
"10_three_zero","10_three_one","10_three_two","10_three_three","10_three_four","10_three_five",
"10_three_six","10_three_seven","10_three_eight","10_three_nine","10_three_ten","10_three_eleven",
"10_three_twelve","10_three_thirteen","10_three_fourteen","10_three_fifteen","10_three_sixteen","10_three_seventeen",
"10_three_eighteen","10_three_nineteen","10_three_twenty","10_three_twentyone",
"11_three_zero","11_three_one","11_three_two","11_three_three","11_three_four","11_three_five",
"11_three_six","11_three_seven","11_three_eight","11_three_nine","11_three_ten","11_three_eleven",
"11_three_twelve","11_three_thirteen","11_three_fourteen","11_three_fifteen","11_three_sixteen","11_three_seventeen",
"11_three_eighteen","11_three_nineteen","11_three_twenty","11_three_twentyone",
"12_three_zero","12_three_one","12_three_two","12_three_three","12_three_four","12_three_five",
"12_three_six","12_three_seven","12_three_eight","12_three_nine","12_three_ten","12_three_eleven",
"12_three_twelve","12_three_thirteen","12_three_fourteen","12_three_fifteen","12_three_sixteen","12_three_seventeen",
"12_three_eighteen","12_three_nineteen","12_three_twenty","12_three_twentyone",
"13_three_zero","13_three_one","13_three_two","13_three_three","13_three_four","13_three_five",
"13_three_six","13_three_seven","13_three_eight","13_three_nine","13_three_ten","13_three_eleven",
"13_three_twelve","13_three_thirteen","13_three_fourteen","13_three_fifteen","13_three_sixteen","13_three_seventeen",
"13_three_eighteen","13_three_nineteen","13_three_twenty","13_three_twentyone",
"14_three_zero","14_three_one","14_three_two","14_three_three","14_three_four","14_three_five",
"14_three_six","14_three_seven","14_three_eight","14_three_nine","14_three_ten","14_three_eleven",
"14_three_twelve","14_three_thirteen","14_three_fourteen","14_three_fifteen","14_three_sixteen","14_three_seventeen",
"14_three_eighteen","14_three_nineteen","14_three_twenty","14_three_twentyone",
"15_three_zero","15_three_one","15_three_two","15_three_three","15_three_four","15_three_five",
"15_three_six","15_three_seven","15_three_eight","15_three_nine","15_three_ten","15_three_eleven",
"15_three_twelve","15_three_thirteen","15_three_fourteen","15_three_fifteen","15_three_sixteen","15_three_seventeen",
"15_three_eighteen","15_three_nineteen","15_three_twenty","15_three_twentyone",
"16_three_zero","16_three_one","16_three_two","16_three_three","16_three_four","16_three_five",
"16_three_six","16_three_seven","16_three_eight","16_three_nine","16_three_ten","16_three_eleven",
"16_three_twelve","16_three_thirteen","16_three_fourteen","16_three_fifteen","16_three_sixteen","16_three_seventeen",
"16_three_eighteen","16_three_nineteen","16_three_twenty","16_three_twentyone",
"17_three_zero","17_three_one","17_three_two","17_three_three","17_three_four","17_three_five",
"17_three_six","17_three_seven","17_three_eight","17_three_nine","17_three_ten","17_three_eleven",
"17_three_twelve","17_three_thirteen","17_three_fourteen","17_three_fifteen","17_three_sixteen","17_three_seventeen",
"17_three_eighteen","17_three_nineteen","17_three_twenty","17_three_twentyone",
"18_three_zero","18_three_one","18_three_two","18_three_three","18_three_four","18_three_five",
"18_three_six","18_three_seven","18_three_eight","18_three_nine","18_three_ten","18_three_eleven",
"18_three_twelve","18_three_thirteen","18_three_fourteen","18_three_fifteen","18_three_sixteen","18_three_seventeen",
"18_three_eighteen","18_three_nineteen","18_three_twenty","18_three_twentyone",
"19_three_zero","19_three_one","19_three_two","19_three_three","19_three_four","19_three_five",
"19_three_six","19_three_seven","19_three_eight","19_three_nine","19_three_ten","19_three_eleven",
"19_three_twelve","19_three_thirteen","19_three_fourteen","19_three_fifteen","19_three_sixteen","19_three_seventeen",
"19_three_eighteen","19_three_nineteen","19_three_twenty","19_three_twentyone",
"20_three_zero","20_three_one","20_three_two","20_three_three","20_three_four","20_three_five",
"20_three_six","20_three_seven","20_three_eight","20_three_nine","20_three_ten","20_three_eleven",
"20_three_twelve","20_three_thirteen","20_three_fourteen","20_three_fifteen","20_three_sixteen","20_three_seventeen",
"20_three_eighteen","20_three_nineteen","20_three_twenty","20_three_twentyone"]

x_pos4=["four_zero","four_one","four_two","four_three","four_four","four_five","four_six","four_seven",
"four_eight","four_nine","four_ten","four_eleven","four_twelve","four_thirteen","four_fourteen","four_fifteen",
"four_sixteen","four_seventeen","four_eighteen","four_nineteen","four_twenty","four_twentyone","2_four_zero",
"2_four_one","2_four_two","2_four_three","2_four_four","2_four_five","2_four_six","2_four_seven","2_four_eight",
"2_four_nine","2_four_ten","2_four_eleven","2_four_twelve","2_four_thirteen","2_four_fourteen","2_four_fifteen",
"2_four_sixteen","2_four_seventeen","2_four_eighteen","2_four_nineteen","2_four_twenty","2_four_twentyone",
"3_four_zero","3_four_one","3_four_two","3_four_three","3_four_four","3_four_five",
"3_four_six","3_four_seven","3_four_eight","3_four_nine","3_four_ten","3_four_eleven",
"3_four_twelve","3_four_thirteen","3_four_fourteen","3_four_fifteen","3_four_sixteen","3_four_seventeen",
"3_four_eighteen","3_four_nineteen","3_four_twenty","3_four_twentyone",
"4_four_zero","4_four_one","4_four_two","4_four_three","4_four_four","4_four_five",
"4_four_six","4_four_seven","4_four_eight","4_four_nine","4_four_ten","4_four_eleven",
"4_four_twelve","4_four_thirteen","4_four_fourteen","4_four_fifteen","4_four_sixteen","4_four_seventeen",
"4_four_eighteen","4_four_nineteen","4_four_twenty","4_four_twentyone",
"5_four_zero","5_four_one","5_four_two","5_four_three","5_four_four","5_four_five",
"5_four_six","5_four_seven","5_four_eight","5_four_nine","5_four_ten","5_four_eleven",
"5_four_twelve","5_four_thirteen","5_four_fourteen","5_four_fifteen","5_four_sixteen","5_four_seventeen",
"5_four_eighteen","5_four_nineteen","5_four_twenty","5_four_twentyone",
"6_four_zero","6_four_one","6_four_two","6_four_three","6_four_four","6_four_five",
"6_four_six","6_four_seven","6_four_eight","6_four_nine","6_four_ten","6_four_eleven",
"6_four_twelve","6_four_thirteen","6_four_fourteen","6_four_fifteen","6_four_sixteen","6_four_seventeen",
"6_four_eighteen","6_four_nineteen","6_four_twenty","6_four_twentyone",
"7_four_zero","7_four_one","7_four_two","7_four_three","7_four_four","7_four_five",
"7_four_six","7_four_seven","7_four_eight","7_four_nine","7_four_ten","7_four_eleven",
"7_four_twelve","7_four_thirteen","7_four_fourteen","7_four_fifteen","7_four_sixteen","7_four_seventeen",
"7_four_eighteen","7_four_nineteen","7_four_twenty","7_four_twentyone",
"8_four_zero","8_four_one","8_four_two","8_four_three","8_four_four","8_four_five",
"8_four_six","8_four_seven","8_four_eight","8_four_nine","8_four_ten","8_four_eleven",
"8_four_twelve","8_four_thirteen","8_four_fourteen","8_four_fifteen","8_four_sixteen","8_four_seventeen",
"8_four_eighteen","8_four_nineteen","8_four_twenty","8_four_twentyone",
"9_four_zero","9_four_one","9_four_two","9_four_three","9_four_four","9_four_five",
"9_four_six","9_four_seven","9_four_eight","9_four_nine","9_four_ten","9_four_eleven",
"9_four_twelve","9_four_thirteen","9_four_fourteen","9_four_fifteen","9_four_sixteen","9_four_seventeen",
"9_four_eighteen","9_four_nineteen","9_four_twenty","9_four_twentyone",
"10_four_zero","10_four_one","10_four_two","10_four_three","10_four_four","10_four_five",
"10_four_six","10_four_seven","10_four_eight","10_four_nine","10_four_ten","10_four_eleven",
"10_four_twelve","10_four_thirteen","10_four_fourteen","10_four_fifteen","10_four_sixteen","10_four_seventeen",
"10_four_eighteen","10_four_nineteen","10_four_twenty","10_four_twentyone",
"11_four_zero","11_four_one","11_four_two","11_four_three","11_four_four","11_four_five",
"11_four_six","11_four_seven","11_four_eight","11_four_nine","11_four_ten","11_four_eleven",
"11_four_twelve","11_four_thirteen","11_four_fourteen","11_four_fifteen","11_four_sixteen","11_four_seventeen",
"11_four_eighteen","11_four_nineteen","11_four_twenty","11_four_twentyone",
"12_four_zero","12_four_one","12_four_two","12_four_three","12_four_four","12_four_five",
"12_four_six","12_four_seven","12_four_eight","12_four_nine","12_four_ten","12_four_eleven",
"12_four_twelve","12_four_thirteen","12_four_fourteen","12_four_fifteen","12_four_sixteen","12_four_seventeen",
"12_four_eighteen","12_four_nineteen","12_four_twenty","12_four_twentyone",
"13_four_zero","13_four_one","13_four_two","13_four_three","13_four_four","13_four_five",
"13_four_six","13_four_seven","13_four_eight","13_four_nine","13_four_ten","13_four_eleven",
"13_four_twelve","13_four_thirteen","13_four_fourteen","13_four_fifteen","13_four_sixteen","13_four_seventeen",
"13_four_eighteen","13_four_nineteen","13_four_twenty","13_four_twentyone",
"14_four_zero","14_four_one","14_four_two","14_four_three","14_four_four","14_four_five",
"14_four_six","14_four_seven","14_four_eight","14_four_nine","14_four_ten","14_four_eleven",
"14_four_twelve","14_four_thirteen","14_four_fourteen","14_four_fifteen","14_four_sixteen","14_four_seventeen",
"14_four_eighteen","14_four_nineteen","14_four_twenty","14_four_twentyone",
"15_four_zero","15_four_one","15_four_two","15_four_three","15_four_four","15_four_five",
"15_four_six","15_four_seven","15_four_eight","15_four_nine","15_four_ten","15_four_eleven",
"15_four_twelve","15_four_thirteen","15_four_fourteen","15_four_fifteen","15_four_sixteen","15_four_seventeen",
"15_four_eighteen","15_four_nineteen","15_four_twenty","15_four_twentyone",
"16_four_zero","16_four_one","16_four_two","16_four_three","16_four_four","16_four_five",
"16_four_six","16_four_seven","16_four_eight","16_four_nine","16_four_ten","16_four_eleven",
"16_four_twelve","16_four_thirteen","16_four_fourteen","16_four_fifteen","16_four_sixteen","16_four_seventeen",
"16_four_eighteen","16_four_nineteen","16_four_twenty","16_four_twentyone",
"17_four_zero","17_four_one","17_four_two","17_four_three","17_four_four","17_four_five",
"17_four_six","17_four_seven","17_four_eight","17_four_nine","17_four_ten","17_four_eleven",
"17_four_twelve","17_four_thirteen","17_four_fourteen","17_four_fifteen","17_four_sixteen","17_four_seventeen",
"17_four_eighteen","17_four_nineteen","17_four_twenty","17_four_twentyone",
"18_four_zero","18_four_one","18_four_two","18_four_three","18_four_four","18_four_five",
"18_four_six","18_four_seven","18_four_eight","18_four_nine","18_four_ten","18_four_eleven",
"18_four_twelve","18_four_thirteen","18_four_fourteen","18_four_fifteen","18_four_sixteen","18_four_seventeen",
"18_four_eighteen","18_four_nineteen","18_four_twenty","18_four_twentyone",
"19_four_zero","19_four_one","19_four_two","19_four_three","19_four_four","19_four_five",
"19_four_six","19_four_seven","19_four_eight","19_four_nine","19_four_ten","19_four_eleven",
"19_four_twelve","19_four_thirteen","19_four_fourteen","19_four_fifteen","19_four_sixteen","19_four_seventeen",
"19_four_eighteen","19_four_nineteen","19_four_twenty","19_four_twentyone",
"20_four_zero","20_four_one","20_four_two","20_four_three","20_four_four","20_four_five",
"20_four_six","20_four_seven","20_four_eight","20_four_nine","20_four_ten","20_four_eleven",
"20_four_twelve","20_four_thirteen","20_four_fourteen","20_four_fifteen","20_four_sixteen","20_four_seventeen",
"20_four_eighteen","20_four_nineteen","20_four_twenty","20_four_twentyone"]

x_pos5=["five_zero","five_one","five_two","five_three","five_four","five_five","five_six","five_seven","five_eight",
"five_nine","five_ten","five_eleven","five_twelve","five_thirteen","five_fourteen","five_fifteen","five_sixteen",
"five_seventeen","five_eighteen","five_nineteen","five_twenty","five_twentyone","2_five_zero","2_five_one",
"2_five_two","2_five_three","2_five_four","2_five_five","2_five_six","2_five_seven","2_five_eight","2_five_nine",
"2_five_ten","2_five_eleven","2_five_twelve","2_five_thirteen","2_five_fourteen","2_five_fifteen","2_five_sixteen",
"2_five_seventeen","2_five_eighteen","2_five_nineteen","2_five_twenty","2_five_twentyone",
"3_five_zero","3_five_one","3_five_two","3_five_three","3_five_four","3_five_five",
"3_five_six","3_five_seven","3_five_eight","3_five_nine","3_five_ten","3_five_eleven",
"3_five_twelve","3_five_thirteen","3_five_fourteen","3_five_fifteen","3_five_sixteen","3_five_seventeen",
"3_five_eighteen","3_five_nineteen","3_five_twenty","3_five_twentyone",
"4_five_zero","4_five_one","4_five_two","4_five_three","4_five_four","4_five_five",
"4_five_six","4_five_seven","4_five_eight","4_five_nine","4_five_ten","4_five_eleven",
"4_five_twelve","4_five_thirteen","4_five_fourteen","4_five_fifteen","4_five_sixteen","4_five_seventeen",
"4_five_eighteen","4_five_nineteen","4_five_twenty","4_five_twentyone",
"5_five_zero","5_five_one","5_five_two","5_five_three","5_five_four","5_five_five",
"5_five_six","5_five_seven","5_five_eight","5_five_nine","5_five_ten","5_five_eleven",
"5_five_twelve","5_five_thirteen","5_five_fourteen","5_five_fifteen","5_five_sixteen","5_five_seventeen",
"5_five_eighteen","5_five_nineteen","5_five_twenty","5_five_twentyone",
"6_five_zero","6_five_one","6_five_two","6_five_three","6_five_four","6_five_five",
"6_five_six","6_five_seven","6_five_eight","6_five_nine","6_five_ten","6_five_eleven",
"6_five_twelve","6_five_thirteen","6_five_fourteen","6_five_fifteen","6_five_sixteen","6_five_seventeen",
"6_five_eighteen","6_five_nineteen","6_five_twenty","6_five_twentyone",
"7_five_zero","7_five_one","7_five_two","7_five_three","7_five_four","7_five_five",
"7_five_six","7_five_seven","7_five_eight","7_five_nine","7_five_ten","7_five_eleven",
"7_five_twelve","7_five_thirteen","7_five_fourteen","7_five_fifteen","7_five_sixteen","7_five_seventeen",
"7_five_eighteen","7_five_nineteen","7_five_twenty","7_five_twentyone",
"8_five_zero","8_five_one","8_five_two","8_five_three","8_five_four","8_five_five",
"8_five_six","8_five_seven","8_five_eight","8_five_nine","8_five_ten","8_five_eleven",
"8_five_twelve","8_five_thirteen","8_five_fourteen","8_five_fifteen","8_five_sixteen","8_five_seventeen",
"8_five_eighteen","8_five_nineteen","8_five_twenty","8_five_twentyone",
"9_five_zero","9_five_one","9_five_two","9_five_three","9_five_four","9_five_five",
"9_five_six","9_five_seven","9_five_eight","9_five_nine","9_five_ten","9_five_eleven",
"9_five_twelve","9_five_thirteen","9_five_fourteen","9_five_fifteen","9_five_sixteen","9_five_seventeen",
"9_five_eighteen","9_five_nineteen","9_five_twenty","9_five_twentyone",
"10_five_zero","10_five_one","10_five_two","10_five_three","10_five_four","10_five_five",
"10_five_six","10_five_seven","10_five_eight","10_five_nine","10_five_ten","10_five_eleven",
"10_five_twelve","10_five_thirteen","10_five_fourteen","10_five_fifteen","10_five_sixteen","10_five_seventeen",
"10_five_eighteen","10_five_nineteen","10_five_twenty","10_five_twentyone",
"11_five_zero","11_five_one","11_five_two","11_five_three","11_five_four","11_five_five",
"11_five_six","11_five_seven","11_five_eight","11_five_nine","11_five_ten","11_five_eleven",
"11_five_twelve","11_five_thirteen","11_five_fourteen","11_five_fifteen","11_five_sixteen","11_five_seventeen",
"11_five_eighteen","11_five_nineteen","11_five_twenty","11_five_twentyone",
"12_five_zero","12_five_one","12_five_two","12_five_three","12_five_four","12_five_five",
"12_five_six","12_five_seven","12_five_eight","12_five_nine","12_five_ten","12_five_eleven",
"12_five_twelve","12_five_thirteen","12_five_fourteen","12_five_fifteen","12_five_sixteen","12_five_seventeen",
"12_five_eighteen","12_five_nineteen","12_five_twenty","12_five_twentyone",
"13_five_zero","13_five_one","13_five_two","13_five_three","13_five_four","13_five_five",
"13_five_six","13_five_seven","13_five_eight","13_five_nine","13_five_ten","13_five_eleven",
"13_five_twelve","13_five_thirteen","13_five_fourteen","13_five_fifteen","13_five_sixteen","13_five_seventeen",
"13_five_eighteen","13_five_nineteen","13_five_twenty","13_five_twentyone",
"14_five_zero","14_five_one","14_five_two","14_five_three","14_five_four","14_five_five",
"14_five_six","14_five_seven","14_five_eight","14_five_nine","14_five_ten","14_five_eleven",
"14_five_twelve","14_five_thirteen","14_five_fourteen","14_five_fifteen","14_five_sixteen","14_five_seventeen",
"14_five_eighteen","14_five_nineteen","14_five_twenty","14_five_twentyone",
"15_five_zero","15_five_one","15_five_two","15_five_three","15_five_four","15_five_five",
"15_five_six","15_five_seven","15_five_eight","15_five_nine","15_five_ten","15_five_eleven",
"15_five_twelve","15_five_thirteen","15_five_fourteen","15_five_fifteen","15_five_sixteen","15_five_seventeen",
"15_five_eighteen","15_five_nineteen","15_five_twenty","15_five_twentyone",
"16_five_zero","16_five_one","16_five_two","16_five_three","16_five_four","16_five_five",
"16_five_six","16_five_seven","16_five_eight","16_five_nine","16_five_ten","16_five_eleven",
"16_five_twelve","16_five_thirteen","16_five_fourteen","16_five_fifteen","16_five_sixteen","16_five_seventeen",
"16_five_eighteen","16_five_nineteen","16_five_twenty","16_five_twentyone",
"17_five_zero","17_five_one","17_five_two","17_five_three","17_five_four","17_five_five",
"17_five_six","17_five_seven","17_five_eight","17_five_nine","17_five_ten","17_five_eleven",
"17_five_twelve","17_five_thirteen","17_five_fourteen","17_five_fifteen","17_five_sixteen","17_five_seventeen",
"17_five_eighteen","17_five_nineteen","17_five_twenty","17_five_twentyone",
"18_five_zero","18_five_one","18_five_two","18_five_three","18_five_four","18_five_five",
"18_five_six","18_five_seven","18_five_eight","18_five_nine","18_five_ten","18_five_eleven",
"18_five_twelve","18_five_thirteen","18_five_fourteen","18_five_fifteen","18_five_sixteen","18_five_seventeen",
"18_five_eighteen","18_five_nineteen","18_five_twenty","18_five_twentyone",
"19_five_zero","19_five_one","19_five_two","19_five_three","19_five_four","19_five_five",
"19_five_six","19_five_seven","19_five_eight","19_five_nine","19_five_ten","19_five_eleven",
"19_five_twelve","19_five_thirteen","19_five_fourteen","19_five_fifteen","19_five_sixteen","19_five_seventeen",
"19_five_eighteen","19_five_nineteen","19_five_twenty","19_five_twentyone",
"20_five_zero","20_five_one","20_five_two","20_five_three","20_five_four","20_five_five",
"20_five_six","20_five_seven","20_five_eight","20_five_nine","20_five_ten","20_five_eleven",
"20_five_twelve","20_five_thirteen","20_five_fourteen","20_five_fifteen","20_five_sixteen","20_five_seventeen",
"20_five_eighteen","20_five_nineteen","20_five_twenty","20_five_twentyone"]

x_pos6=["six_zero","six_one","six_two","six_three","six_four","six_five","six_six","six_seven","six_eight","six_nine",
"six_ten","six_eleven","six_twelve","six_thirteen","six_fourteen","six_fifteen","six_sixteen","six_seventeen",
"six_eighteen","six_nineteen","six_twenty","six_twentyone","2_six_zero","2_six_one","2_six_two","2_six_three",
"2_six_four","2_six_five","2_six_six","2_six_seven","2_six_eight","2_six_nine","2_six_ten","2_six_eleven","2_six_twelve",
"2_six_thirteen","2_six_fourteen","2_six_fifteen","2_six_sixteen","2_six_seventeen","2_six_eighteen","2_six_nineteen","2_six_twenty","2_six_twentyone",
"3_six_zero","3_six_one","3_six_two","3_six_three","3_six_four","3_six_five",
"3_six_six","3_six_seven","3_six_eight","3_six_nine","3_six_ten","3_six_eleven",
"3_six_twelve","3_six_thirteen","3_six_fourteen","3_six_fifteen","3_six_sixteen","3_six_seventeen",
"3_six_eighteen","3_six_nineteen","3_six_twenty","3_six_twentyone",
"4_six_zero","4_six_one","4_six_two","4_six_three","4_six_four","4_six_five",
"4_six_six","4_six_seven","4_six_eight","4_six_nine","4_six_ten","4_six_eleven",
"4_six_twelve","4_six_thirteen","4_six_fourteen","4_six_fifteen","4_six_sixteen","4_six_seventeen",
"4_six_eighteen","4_six_nineteen","4_six_twenty","4_six_twentyone",
"5_six_zero","5_six_one","5_six_two","5_six_three","5_six_four","5_six_five",
"5_six_six","5_six_seven","5_six_eight","5_six_nine","5_six_ten","5_six_eleven",
"5_six_twelve","5_six_thirteen","5_six_fourteen","5_six_fifteen","5_six_sixteen","5_six_seventeen",
"5_six_eighteen","5_six_nineteen","5_six_twenty","5_six_twentyone",
"6_six_zero","6_six_one","6_six_two","6_six_three","6_six_four","6_six_five",
"6_six_six","6_six_seven","6_six_eight","6_six_nine","6_six_ten","6_six_eleven",
"6_six_twelve","6_six_thirteen","6_six_fourteen","6_six_fifteen","6_six_sixteen","6_six_seventeen",
"6_six_eighteen","6_six_nineteen","6_six_twenty","6_six_twentyone",
"7_six_zero","7_six_one","7_six_two","7_six_three","7_six_four","7_six_five",
"7_six_six","7_six_seven","7_six_eight","7_six_nine","7_six_ten","7_six_eleven",
"7_six_twelve","7_six_thirteen","7_six_fourteen","7_six_fifteen","7_six_sixteen","7_six_seventeen",
"7_six_eighteen","7_six_nineteen","7_six_twenty","7_six_twentyone",
"8_six_zero","8_six_one","8_six_two","8_six_three","8_six_four","8_six_five",
"8_six_six","8_six_seven","8_six_eight","8_six_nine","8_six_ten","8_six_eleven",
"8_six_twelve","8_six_thirteen","8_six_fourteen","8_six_fifteen","8_six_sixteen","8_six_seventeen",
"8_six_eighteen","8_six_nineteen","8_six_twenty","8_six_twentyone",
"9_six_zero","9_six_one","9_six_two","9_six_three","9_six_four","9_six_five",
"9_six_six","9_six_seven","9_six_eight","9_six_nine","9_six_ten","9_six_eleven",
"9_six_twelve","9_six_thirteen","9_six_fourteen","9_six_fifteen","9_six_sixteen","9_six_seventeen",
"9_six_eighteen","9_six_nineteen","9_six_twenty","9_six_twentyone",
"10_six_zero","10_six_one","10_six_two","10_six_three","10_six_four","10_six_five",
"10_six_six","10_six_seven","10_six_eight","10_six_nine","10_six_ten","10_six_eleven",
"10_six_twelve","10_six_thirteen","10_six_fourteen","10_six_fifteen","10_six_sixteen","10_six_seventeen",
"10_six_eighteen","10_six_nineteen","10_six_twenty","10_six_twentyone",
"11_six_zero","11_six_one","11_six_two","11_six_three","11_six_four","11_six_five",
"11_six_six","11_six_seven","11_six_eight","11_six_nine","11_six_ten","11_six_eleven",
"11_six_twelve","11_six_thirteen","11_six_fourteen","11_six_fifteen","11_six_sixteen","11_six_seventeen",
"11_six_eighteen","11_six_nineteen","11_six_twenty","11_six_twentyone",
"12_six_zero","12_six_one","12_six_two","12_six_three","12_six_four","12_six_five",
"12_six_six","12_six_seven","12_six_eight","12_six_nine","12_six_ten","12_six_eleven",
"12_six_twelve","12_six_thirteen","12_six_fourteen","12_six_fifteen","12_six_sixteen","12_six_seventeen",
"12_six_eighteen","12_six_nineteen","12_six_twenty","12_six_twentyone",
"13_six_zero","13_six_one","13_six_two","13_six_three","13_six_four","13_six_five",
"13_six_six","13_six_seven","13_six_eight","13_six_nine","13_six_ten","13_six_eleven",
"13_six_twelve","13_six_thirteen","13_six_fourteen","13_six_fifteen","13_six_sixteen","13_six_seventeen",
"13_six_eighteen","13_six_nineteen","13_six_twenty","13_six_twentyone",
"14_six_zero","14_six_one","14_six_two","14_six_three","14_six_four","14_six_five",
"14_six_six","14_six_seven","14_six_eight","14_six_nine","14_six_ten","14_six_eleven",
"14_six_twelve","14_six_thirteen","14_six_fourteen","14_six_fifteen","14_six_sixteen","14_six_seventeen",
"14_six_eighteen","14_six_nineteen","14_six_twenty","14_six_twentyone",
"15_six_zero","15_six_one","15_six_two","15_six_three","15_six_four","15_six_five",
"15_six_six","15_six_seven","15_six_eight","15_six_nine","15_six_ten","15_six_eleven",
"15_six_twelve","15_six_thirteen","15_six_fourteen","15_six_fifteen","15_six_sixteen","15_six_seventeen",
"15_six_eighteen","15_six_nineteen","15_six_twenty","15_six_twentyone",
"16_six_zero","16_six_one","16_six_two","16_six_three","16_six_four","16_six_five",
"16_six_six","16_six_seven","16_six_eight","16_six_nine","16_six_ten","16_six_eleven",
"16_six_twelve","16_six_thirteen","16_six_fourteen","16_six_fifteen","16_six_sixteen","16_six_seventeen",
"16_six_eighteen","16_six_nineteen","16_six_twenty","16_six_twentyone",
"17_six_zero","17_six_one","17_six_two","17_six_three","17_six_four","17_six_five",
"17_six_six","17_six_seven","17_six_eight","17_six_nine","17_six_ten","17_six_eleven",
"17_six_twelve","17_six_thirteen","17_six_fourteen","17_six_fifteen","17_six_sixteen","17_six_seventeen",
"17_six_eighteen","17_six_nineteen","17_six_twenty","17_six_twentyone",
"18_six_zero","18_six_one","18_six_two","18_six_three","18_six_four","18_six_five",
"18_six_six","18_six_seven","18_six_eight","18_six_nine","18_six_ten","18_six_eleven",
"18_six_twelve","18_six_thirteen","18_six_fourteen","18_six_fifteen","18_six_sixteen","18_six_seventeen",
"18_six_eighteen","18_six_nineteen","18_six_twenty","18_six_twentyone",
"19_six_zero","19_six_one","19_six_two","19_six_three","19_six_four","19_six_five",
"19_six_six","19_six_seven","19_six_eight","19_six_nine","19_six_ten","19_six_eleven",
"19_six_twelve","19_six_thirteen","19_six_fourteen","19_six_fifteen","19_six_sixteen","19_six_seventeen",
"19_six_eighteen","19_six_nineteen","19_six_twenty","19_six_twentyone",
"20_six_zero","20_six_one","20_six_two","20_six_three","20_six_four","20_six_five",
"20_six_six","20_six_seven","20_six_eight","20_six_nine","20_six_ten","20_six_eleven",
"20_six_twelve","20_six_thirteen","20_six_fourteen","20_six_fifteen","20_six_sixteen","20_six_seventeen",
"20_six_eighteen","20_six_nineteen","20_six_twenty","20_six_twentyone"]

document.getElementById("show_switch").style.display="none";
document.addEventListener("keypress", function(event) {
      console.log(event.key)	
      if(event.key==='z'){
      myFunction60();
      }	
      else if(event.key==='x'){
      myFunction61();
      }	
      else if(event.key==='c'){
      myFunction62();
      }	
      else if(event.key==='v'){
      myFunction63();
      }	
      else if(event.key==='b'){
      myFunction64();
      }	
      else if(event.key==='n'){
      myFunction65();
      }	
      else if(event.key==='m'){
      myFunction66();
      }	
      else if(event.key==='a'){
      myFunction50();
      }	
      else if(event.key==='s'){
      myFunction51();
      }	
      else if(event.key==='d'){
      myFunction52();
      }	
      else if(event.key==='f'){
      myFunction53();
      }	
      else if(event.key==='g'){
      myFunction54();
      }	
      else if(event.key==='h'){
      myFunction55();
      }	
      else if(event.key==='j'){
      myFunction56();
      }	
      else if(event.key==='k'){
      myFunction57();
      }	
      else if(event.key==='l'){
      myFunction58();
      }	
      else if(event.key==='q'){
      myFunction40();
      }	
      else if(event.key==='w'){
      myFunction41();
      }	
      else if(event.key==='e'){
      myFunction42();
      }	
      else if(event.key==='r'){
      myFunction43();
      }	
      else if(event.key==='t'){
      myFunction44();
      }	
      else if(event.key==='y'){
      myFunction45();
      }	
      else if(event.key==='u'){
      myFunction46();
      }	
      else if(event.key==='i'){
      myFunction47();
      }	
      else if(event.key==='o'){
      myFunction48();
      }	
      else if(event.key==='p'){
      myFunction49();
      }	
      else if(event.key==='1'){
      myFunction30();
      }	
      else if(event.key==='2'){
      myFunction31();
      }	
      else if(event.key==='3'){
      myFunction32();
      }	
      else if(event.key==='4'){
      myFunction33();
      }	
      else if(event.key==='5'){
      myFunction34();
      }	
      else if(event.key==='6'){
      myFunction35();
      }	
      else if(event.key==='7'){
      myFunction36();
      }	
      else if(event.key==='8'){
      myFunction37();
      }	
      else if(event.key==='9'){
      myFunction38();
      }	
      else if(event.key==='0'){
      myFunction39();
      }	
      else if(event.key==='A'){
      myFunction20();
      }	
      else if(event.key==='S'){
      myFunction21();
      }	
      else if(event.key==='D'){
      myFunction22();
      }	
      else if(event.key==='F'){
      myFunction23();
      }	
      else if(event.key==='G'){
      myFunction24();
      }	
      else if(event.key==='H'){
      myFunction25();
      }	
      else if(event.key==='J'){
      myFunction26();
      }	
      else if(event.key==='K'){
      myFunction27();
      }	
      else if(event.key==='L'){
      myFunction28();
      }	
      else if(event.key==='Q'){
      myFunction10();
      }	
      else if(event.key==='W'){
      myFunction11();
      }	
      else if(event.key==='E'){
      myFunction12();
      }	
      else if(event.key==='R'){
      myFunction13();
      }	
      else if(event.key==='T'){
      myFunction14();
      }	
      else if(event.key==='Y'){
      myFunction15();
      }	
      else if(event.key==='U'){
      myFunction16();
      }	
      else if(event.key==='I'){
      myFunction17();
      }	
      else if(event.key==='O'){
      myFunction18();
      }	
      else if(event.key==='P'){
      myFunction19();
      }	
      else if(event.key===','){
      the_prev();	
      }	
      else if(event.key==='.'){
      the_next();	
      }
      else if(event.key='C'){
      myFunctionClear1();
      myFunctionClear2()
      myFunctionClear3()
      myFunctionClear4()
      myFunctionClear5()
      myFunctionClear6()

      }
  });

function hide_switch() {
	document.getElementById("all_buttons").style.display="none";
        document.getElementById("hide_switch").style.display="none";
	document.getElementById("show_switch").style.display="block";	
	}
function show_switch() {
	document.getElementById("all_buttons").style.display="block";
        document.getElementById("hide_switch").style.display="block";
        document.getElementById("show_switch").style.display="none";
	}
k=0
function add(){
    for(k=x_pos.length-1;k>i;){
    document.getElementById(x_pos[k]).innerHTML=document.getElementById(x_pos[k-1]).innerHTML
    document.getElementById(x_pos2[k]).innerHTML=document.getElementById(x_pos2[k-1]).innerHTML
    document.getElementById(x_pos3[k]).innerHTML=document.getElementById(x_pos3[k-1]).innerHTML
    document.getElementById(x_pos4[k]).innerHTML=document.getElementById(x_pos4[k-1]).innerHTML
    document.getElementById(x_pos5[k]).innerHTML=document.getElementById(x_pos5[k-1]).innerHTML
    document.getElementById(x_pos6[k]).innerHTML=document.getElementById(x_pos6[k-1]).innerHTML

    document.getElementById(x_pos[k]).style.left=document.getElementById(x_pos[k-1]).style.left
    document.getElementById(x_pos2[k]).style.left=document.getElementById(x_pos2[k-1]).style.left
    document.getElementById(x_pos3[k]).style.left=document.getElementById(x_pos3[k-1]).style.left
    document.getElementById(x_pos4[k]).style.left=document.getElementById(x_pos4[k-1]).style.left
    document.getElementById(x_pos5[k]).style.left=document.getElementById(x_pos5[k-1]).style.left
    document.getElementById(x_pos6[k]).style.left=document.getElementById(x_pos6[k-1]).style.left
    k=k-1
    }
    }
function sub(){
    for(k=i;k<x_pos.length-1;){
    document.getElementById(x_pos[k]).innerHTML=document.getElementById(x_pos[k+1]).innerHTML
    document.getElementById(x_pos2[k]).innerHTML=document.getElementById(x_pos2[k+1]).innerHTML
    document.getElementById(x_pos3[k]).innerHTML=document.getElementById(x_pos3[k+1]).innerHTML
    document.getElementById(x_pos4[k]).innerHTML=document.getElementById(x_pos4[k+1]).innerHTML
    document.getElementById(x_pos5[k]).innerHTML=document.getElementById(x_pos5[k+1]).innerHTML
    document.getElementById(x_pos6[k]).innerHTML=document.getElementById(x_pos6[k+1]).innerHTML

    document.getElementById(x_pos[k]).style.left=document.getElementById(x_pos[k+1]).style.left
    document.getElementById(x_pos2[k]).style.left=document.getElementById(x_pos2[k+1]).style.left
    document.getElementById(x_pos3[k]).style.left=document.getElementById(x_pos3[k+1]).style.left
    document.getElementById(x_pos4[k]).style.left=document.getElementById(x_pos4[k+1]).style.left
    document.getElementById(x_pos5[k]).style.left=document.getElementById(x_pos5[k+1]).style.left
    document.getElementById(x_pos6[k]).style.left=document.getElementById(x_pos6[k+1]).style.left
    k=k+1
    }
    }
m=0

function generate_text_button(){
    my_tab_code=''
    for(m=0;m < x_pos.length;){
    my_tab_code=my_tab_code+"_"+document.getElementById(x_pos[m]).innerHTML
    my_tab_code=my_tab_code+"_"+document.getElementById(x_pos2[m]).innerHTML
    my_tab_code=my_tab_code+"_"+document.getElementById(x_pos3[m]).innerHTML
    my_tab_code=my_tab_code+"_"+document.getElementById(x_pos4[m]).innerHTML
    my_tab_code=my_tab_code+"_"+document.getElementById(x_pos5[m]).innerHTML
    my_tab_code=my_tab_code+"_"+document.getElementById(x_pos6[m]).innerHTML
    m=m+1
    }
    my_tab_code=my_tab_code.slice(1)
    document.getElementById("generate_text_input").innerHTML=my_tab_code
    var range = document.createRange();
    range.selectNode(document.getElementById("generate_text_input"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
}

function generate_tabs_button(){
    n=0
    o=0
    input_tab_code=document.getElementById("generate_tabs_input").value
    input_tab_code=input_tab_code.split("_")
    for(n=0;n<input_tab_code.length;){
    document.getElementById(x_pos[o]).innerHTML=input_tab_code[n]
    if(input_tab_code[n]=='h' || input_tab_code[n]=='p' || input_tab_code[n]=='b' || input_tab_code[n]=='v'
     || input_tab_code[n]=='a' || input_tab_code[n]=='t' || input_tab_code[n]=='/' || input_tab_code[n]=='\\'
     || input_tab_code[n]=='|' || input_tab_code[n]=='^'){
        document.getElementById(x_pos[o]).style.left="20px";
     }
    document.getElementById(x_pos2[o]).innerHTML=input_tab_code[n+1]
    if(input_tab_code[n+1]=='h' || input_tab_code[n+1]=='p' || input_tab_code[n+1]=='b' || input_tab_code[n+1]=='v'
     || input_tab_code[n+1]=='a' || input_tab_code[n+1]=='t' || input_tab_code[n+1]=='/' || input_tab_code[n+1]=='\\'
     || input_tab_code[n+1]=='|' || input_tab_code[n+1]=='^'){
        document.getElementById(x_pos2[o]).style.left="20px";
     }
    document.getElementById(x_pos3[o]).innerHTML=input_tab_code[n+2]
    if(input_tab_code[n+2]=='h' || input_tab_code[n+2]=='p' || input_tab_code[n+2]=='b' || input_tab_code[n+2]=='v'
     || input_tab_code[n+2]=='a' || input_tab_code[n+2]=='t' || input_tab_code[n+2]=='/' || input_tab_code[n+2]=='\\'
     || input_tab_code[n+2]=='|' || input_tab_code[n+2]=='^'){
        document.getElementById(x_pos3[o]).style.left="20px";
     }
    document.getElementById(x_pos4[o]).innerHTML=input_tab_code[n+3]
    if(input_tab_code[n+3]=='h' || input_tab_code[n+3]=='p' || input_tab_code[n+3]=='b' || input_tab_code[n+3]=='v'
     || input_tab_code[n+3]=='a' || input_tab_code[n+3]=='t' || input_tab_code[n+3]=='/' || input_tab_code[n+3]=='\\'
     || input_tab_code[n+3]=='|' || input_tab_code[n+3]=='^'){
        document.getElementById(x_pos4[o]).style.left="20px";
     }
    document.getElementById(x_pos5[o]).innerHTML=input_tab_code[n+4]
    if(input_tab_code[n+4]=='h' || input_tab_code[n+4]=='p' || input_tab_code[n+4]=='b' || input_tab_code[n+4]=='v'
     || input_tab_code[n+4]=='a' || input_tab_code[n+4]=='t' || input_tab_code[n+4]=='/' || input_tab_code[n+4]=='\\'
     || input_tab_code[n+4]=='|' || input_tab_code[n+4]=='^'){
        document.getElementById(x_pos5[o]).style.left="20px";
     }
    document.getElementById(x_pos6[o]).innerHTML=input_tab_code[n+5]
    if(input_tab_code[n+5]=='h' || input_tab_code[n+5]=='p' || input_tab_code[n+5]=='b' || input_tab_code[n+5]=='v'
     || input_tab_code[n+5]=='a' || input_tab_code[n+5]=='t' || input_tab_code[n+5]=='/' || input_tab_code[n+5]=='\\'
     || input_tab_code[n+5]=='|' || input_tab_code[n+5]=='^'){
        document.getElementById(x_pos6[o]).style.left="20px";
     }
    n=n+6
    o=o+1
    }

}



function reset_style(elem){
	document.getElementById(elem).style.left="0px"
	document.getElementById(elem).style.top="-14px"

}


document.getElementById("1_blank").addEventListener("mouseover",function(){
                myFunctionClear1()
                });

document.getElementById("2_blank").addEventListener("mouseover",function(){
                myFunctionClear2()
                });

document.getElementById("3_blank").addEventListener("mouseover",function(){
                myFunctionClear3()
                });

document.getElementById("4_blank").addEventListener("mouseover",function(){
                myFunctionClear4()
                });

document.getElementById("5_blank").addEventListener("mouseover",function(){
                myFunctionClear5()
                });

document.getElementById("6_blank").addEventListener("mouseover",function(){
                myFunctionClear6()
                });




var E0 = new Audio("E0.wav")
var E1 = new Audio("E1.wav")
var E2 = new Audio("E2.wav")
var E3 = new Audio("E3.wav")
var E4 = new Audio("E4.wav")
var E5 = new Audio("E5.wav")
var E6 = new Audio("E6.wav")
var E7 = new Audio("E7.wav")
var E8 = new Audio("E8.wav")
var E9 = new Audio("E9.wav")
var E10 = new Audio("E10.wav")
var E11 = new Audio("E11.wav")
var E12 = new Audio("E12.wav")
var E13 = new Audio("E13.wav")
var E14 = new Audio("E14.wav")
var E15 = new Audio("E15.wav")
var E16 = new Audio("E16.wav")
var E17 = new Audio("E17.wav")
var E18 = new Audio("E18.wav")
var E19 = new Audio("E19.wav")
var E20 = new Audio("E20.wav")
var A0 = new Audio("A0.wav")
var A1 = new Audio("A1.wav")
var A2 = new Audio("A2.wav")
var A3 = new Audio("A3.wav")
var A4 = new Audio("A4.wav")
var A5 = new Audio("A5.wav")
var A6 = new Audio("A6.wav")
var A7 = new Audio("A7.wav")
var A8 = new Audio("A8.wav")
var A9 = new Audio("A9.wav")
var A10 = new Audio("A10.wav")
var A11 = new Audio("A11.wav")
var A12 = new Audio("A12.wav")
var A13 = new Audio("A13.wav")
var A14 = new Audio("A14.wav")
var A15 = new Audio("A15.wav")
var A16 = new Audio("A16.wav")
var A17 = new Audio("A17.wav")
var A18 = new Audio("A18.wav")
var A19 = new Audio("A19.wav")
var A20 = new Audio("A20.wav")
var D0 = new Audio("D0.wav")
var D1 = new Audio("D1.wav")
var D2 = new Audio("D2.wav")
var D3 = new Audio("D3.wav")
var D4 = new Audio("D4.wav")
var D5 = new Audio("D5.wav")
var D6 = new Audio("D6.wav")
var D7 = new Audio("D7.wav")
var D8 = new Audio("D8.wav")
var D9 = new Audio("D9.wav")
var D10 = new Audio("D10.wav")
var D11 = new Audio("D11.wav")
var D12 = new Audio("D12.wav")
var D13 = new Audio("D13.wav")
var D14 = new Audio("D14.wav")
var D15 = new Audio("D15.wav")
var D16 = new Audio("D16.wav")
var D17 = new Audio("D17.wav")
var D18 = new Audio("D18.wav")
var D19 = new Audio("D19.wav")
var D20 = new Audio("D20.wav")
var G0 = new Audio("G0.wav")
var G1 = new Audio("G1.wav")
var G2 = new Audio("G2.wav")
var G3 = new Audio("G3.wav")
var G4 = new Audio("G4.wav")
var G5 = new Audio("G5.wav")
var G6 = new Audio("G6.wav")
var G7 = new Audio("G7.wav")
var G8 = new Audio("G8.wav")
var G9 = new Audio("G9.wav")
var G10 = new Audio("G10.wav")
var G11 = new Audio("G11.wav")
var G12 = new Audio("G12.wav")
var G13 = new Audio("G13.wav")
var G14 = new Audio("G14.wav")
var G15 = new Audio("G15.wav")
var G16 = new Audio("G16.wav")
var G17 = new Audio("G17.wav")
var G18 = new Audio("G18.wav")
var G19 = new Audio("G19.wav")
var G20 = new Audio("G20.wav")
var B0 = new Audio("B0.wav")
var B1 = new Audio("B1.wav")
var B2 = new Audio("B2.wav")
var B3 = new Audio("B3.wav")
var B4 = new Audio("B4.wav")
var B5 = new Audio("B5.wav")
var B6 = new Audio("B6.wav")
var B7 = new Audio("B7.wav")
var B8 = new Audio("B8.wav")
var B9 = new Audio("B9.wav")
var B10 = new Audio("B10.wav")
var B11 = new Audio("B11.wav")
var B12 = new Audio("B12.wav")
var B13 = new Audio("B13.wav")
var B14 = new Audio("B14.wav")
var B15 = new Audio("B15.wav")
var B16 = new Audio("B16.wav")
var B17 = new Audio("B17.wav")
var B18 = new Audio("B18.wav")
var B19 = new Audio("B19.wav")
var B20 = new Audio("B20.wav")
var L0 = new Audio("L0.wav")
var L1 = new Audio("L1.wav")
var L2 = new Audio("L2.wav")
var L3 = new Audio("L3.wav")
var L4 = new Audio("L4.wav")
var L5 = new Audio("L5.wav")
var L6 = new Audio("L6.wav")
var L7 = new Audio("L7.wav")
var L8 = new Audio("L8.wav")
var L9 = new Audio("L9.wav")
var L10 = new Audio("L10.wav")
var L11 = new Audio("L11.wav")
var L12 = new Audio("L12.wav")
var L13 = new Audio("L13.wav")
var L14 = new Audio("L14.wav")
var L15 = new Audio("L15.wav")
var L16 = new Audio("L16.wav")
var L17 = new Audio("L17.wav")
var L18 = new Audio("L18.wav")
var L19 = new Audio("L19.wav")
var L20 = new Audio("L20.wav")

function stopAllChannels(){
E0.pause()
E0.currentTime=0
E1.pause()
E1.currentTime=0
E2.pause()
E2.currentTime=0
E3.pause()
E3.currentTime=0
E4.pause()
E4.currentTime=0
E5.pause()
E5.currentTime=0
E6.pause()
E6.currentTime=0
E7.pause()
E7.currentTime=0
E8.pause()
E8.currentTime=0
E9.pause()
E9.currentTime=0
E10.pause()
E10.currentTime=0
E11.pause()
E11.currentTime=0
E12.pause()
E12.currentTime=0
E13.pause()
E13.currentTime=0
E14.pause()
E14.currentTime=0
E15.pause()
E15.currentTime=0
E16.pause()
E16.currentTime=0
E17.pause()
E17.currentTime=0
E18.pause()
E18.currentTime=0
E19.pause()
E19.currentTime=0
E20.pause()
E20.currentTime=0
A0.pause()
A0.currentTime=0
A1.pause()
A1.currentTime=0
A2.pause()
A2.currentTime=0
A3.pause()
A3.currentTime=0
A4.pause()
A4.currentTime=0
A5.pause()
A5.currentTime=0
A6.pause()
A6.currentTime=0
A7.pause()
A7.currentTime=0
A8.pause()
A8.currentTime=0
A9.pause()
A9.currentTime=0
A10.pause()
A10.currentTime=0
A11.pause()
A11.currentTime=0
A12.pause()
A12.currentTime=0
A13.pause()
A13.currentTime=0
A14.pause()
A14.currentTime=0
A15.pause()
A15.currentTime=0
A16.pause()
A16.currentTime=0
A17.pause()
A17.currentTime=0
A18.pause()
A18.currentTime=0
A19.pause()
A19.currentTime=0
A20.pause()
A20.currentTime=0
D0.pause()
D0.currentTime=0
D1.pause()
D1.currentTime=0
D2.pause()
D2.currentTime=0
D3.pause()
D3.currentTime=0
D4.pause()
D4.currentTime=0
D5.pause()
D5.currentTime=0
D6.pause()
D6.currentTime=0
D7.pause()
D7.currentTime=0
D8.pause()
D8.currentTime=0
D9.pause()
D9.currentTime=0
D10.pause()
D10.currentTime=0
D11.pause()
D11.currentTime=0
D12.pause()
D12.currentTime=0
D13.pause()
D13.currentTime=0
D14.pause()
D14.currentTime=0
D15.pause()
D15.currentTime=0
D16.pause()
D16.currentTime=0
D17.pause()
D17.currentTime=0
D18.pause()
D18.currentTime=0
D19.pause()
D19.currentTime=0
D20.pause()
D20.currentTime=0
G0.pause()
G0.currentTime=0
G1.pause()
G1.currentTime=0
G2.pause()
G2.currentTime=0
G3.pause()
G3.currentTime=0
G4.pause()
G4.currentTime=0
G5.pause()
G5.currentTime=0
G6.pause()
G6.currentTime=0
G7.pause()
G7.currentTime=0
G8.pause()
G8.currentTime=0
G9.pause()
G9.currentTime=0
G10.pause()
G10.currentTime=0
G11.pause()
G11.currentTime=0
G12.pause()
G12.currentTime=0
G13.pause()
G13.currentTime=0
G14.pause()
G14.currentTime=0
G15.pause()
G15.currentTime=0
G16.pause()
G16.currentTime=0
G17.pause()
G17.currentTime=0
G18.pause()
G18.currentTime=0
G19.pause()
G19.currentTime=0
G20.pause()
G20.currentTime=0
B0.pause()
B0.currentTime=0
B1.pause()
B1.currentTime=0
B2.pause()
B2.currentTime=0
B3.pause()
B3.currentTime=0
B4.pause()
B4.currentTime=0
B5.pause()
B5.currentTime=0
B6.pause()
B6.currentTime=0
B7.pause()
B7.currentTime=0
B8.pause()
B8.currentTime=0
B9.pause()
B9.currentTime=0
B10.pause()
B10.currentTime=0
B11.pause()
B11.currentTime=0
B12.pause()
B12.currentTime=0
B13.pause()
B13.currentTime=0
B14.pause()
B14.currentTime=0
B15.pause()
B15.currentTime=0
B16.pause()
B16.currentTime=0
B17.pause()
B17.currentTime=0
B18.pause()
B18.currentTime=0
B19.pause()
B19.currentTime=0
B20.pause()
B20.currentTime=0
L0.pause()
L0.currentTime=0
L1.pause()
L1.currentTime=0
L2.pause()
L2.currentTime=0
L3.pause()
L3.currentTime=0
L4.pause()
L4.currentTime=0
L5.pause()
L5.currentTime=0
L6.pause()
L6.currentTime=0
L7.pause()
L7.currentTime=0
L8.pause()
L8.currentTime=0
L9.pause()
L9.currentTime=0
L10.pause()
L10.currentTime=0
L11.pause()
L11.currentTime=0
L12.pause()
L12.currentTime=0
L13.pause()
L13.currentTime=0
L14.pause()
L14.currentTime=0
L15.pause()
L15.currentTime=0
L16.pause()
L16.currentTime=0
L17.pause()
L17.currentTime=0
L18.pause()
L18.currentTime=0
L19.pause()
L19.currentTime=0
L20.pause()
L20.currentTime=0
}

function myFunction10() {
    reset_style(x_pos[i])
    document.getElementById(x_pos[i]).innerHTML="0"
    stopAllChannels();
    E0.play()
}
function myFunction11() {
    reset_style(x_pos[i])
    document.getElementById(x_pos[i]).innerHTML="1"
    stopAllChannels();
    E1.play()

}
function myFunction12() {
    reset_style(x_pos[i])
    document.getElementById(x_pos[i]).innerHTML="2"
    stopAllChannels();
    E2.play()
}
function myFunction13() {
    reset_style(x_pos[i])
    document.getElementById(x_pos[i]).innerHTML="3"
    stopAllChannels();
    E3.play()
}
function myFunction14() {
    reset_style(x_pos[i])
    document.getElementById(x_pos[i]).innerHTML="4"
    stopAllChannels();
    E4.play()
}
function myFunction15() {
    reset_style(x_pos[i])
    document.getElementById(x_pos[i]).innerHTML="5"
    stopAllChannels();
    E5.play()
}
function myFunction16() {
    reset_style(x_pos[i])
    document.getElementById(x_pos[i]).innerHTML="6"
    stopAllChannels();
    E6.play()
}
function myFunction17() {
    reset_style(x_pos[i])
    document.getElementById(x_pos[i]).innerHTML="7"
    stopAllChannels();
    E7.play()
}
function myFunction18() {
    reset_style(x_pos[i])
    document.getElementById(x_pos[i]).innerHTML="8"
    stopAllChannels();
    E8.play()
}
function myFunction19() {
    reset_style(x_pos[i])
    document.getElementById(x_pos[i]).innerHTML="9"
    stopAllChannels();
    E9.play()
}
function myFunction110() {
    reset_style(x_pos[i])
    document.getElementById(x_pos[i]).innerHTML="10"
    stopAllChannels();
    E10.play()
}
function myFunction111() {
    reset_style(x_pos[i])
    document.getElementById(x_pos[i]).innerHTML="11"
    stopAllChannels();
    E11.play()
}
function myFunction112() {
    reset_style(x_pos[i])
    document.getElementById(x_pos[i]).innerHTML="12"
    stopAllChannels();
    E12.play()

}
function myFunction113() {
    reset_style(x_pos[i])
    document.getElementById(x_pos[i]).innerHTML="13"
    stopAllChannels();
    E13.play()
    }
function myFunction114() {
    reset_style(x_pos[i])
    document.getElementById(x_pos[i]).innerHTML="14"
    stopAllChannels();
    E14.play()
    }
function myFunction115() {
    reset_style(x_pos[i])
    document.getElementById(x_pos[i]).innerHTML="15"
    stopAllChannels();
    E15.play()
    }
function myFunction116() {
    reset_style(x_pos[i])
    document.getElementById(x_pos[i]).innerHTML="16"
    stopAllChannels();
    E16.play()
    }
function myFunction117() {
    reset_style(x_pos[i])
    document.getElementById(x_pos[i]).innerHTML="17"
    stopAllChannels();
    E17.play()
    }
function myFunction118() {
    reset_style(x_pos[i])
    document.getElementById(x_pos[i]).innerHTML="18"
    stopAllChannels();
    E18.play()
    }
function myFunction119() {
    reset_style(x_pos[i])
    document.getElementById(x_pos[i]).innerHTML="19"
    stopAllChannels();
    E19.play()
    }
function myFunction120() {
    reset_style(x_pos[i])
    document.getElementById(x_pos[i]).innerHTML="20"
    stopAllChannels();
    E20.play()
    }
function myFunction121() {
    reset_style(x_pos[i])
    document.getElementById(x_pos[i]).innerHTML="21"
    }


function myFunction20() {
    reset_style(x_pos2[i])
    document.getElementById(x_pos2[i]).innerHTML="0"
    stopAllChannels()
    B0.play()
    }
function myFunction21() {
    reset_style(x_pos2[i])
    document.getElementById(x_pos2[i]).innerHTML="1"
    stopAllChannels()
    B1.play()
    }
function myFunction22() {
    reset_style(x_pos2[i])
    document.getElementById(x_pos2[i]).innerHTML="2"
    stopAllChannels()
    B2.play()
    }
function myFunction23() {
    reset_style(x_pos2[i])
    document.getElementById(x_pos2[i]).innerHTML="3"
    stopAllChannels()
    B3.play()
    }
function myFunction24() {
    reset_style(x_pos2[i])
    document.getElementById(x_pos2[i]).innerHTML="4"
    stopAllChannels()
    B4.play()
    }
function myFunction25() {
    reset_style(x_pos2[i])
    document.getElementById(x_pos2[i]).innerHTML="5"
    stopAllChannels()
    B5.play()
    }
function myFunction26() {
    reset_style(x_pos2[i])
    document.getElementById(x_pos2[i]).innerHTML="6"
    stopAllChannels()
    B6.play()
    }
function myFunction27() {
    reset_style(x_pos2[i])
    document.getElementById(x_pos2[i]).innerHTML="7"
    stopAllChannels()
    B7.play()
    }
function myFunction28() {
    reset_style(x_pos2[i])
    document.getElementById(x_pos2[i]).innerHTML="8"
    stopAllChannels()
    B8.play()
    }
function myFunction29() {
    reset_style(x_pos2[i])
    document.getElementById(x_pos2[i]).innerHTML="9"
    stopAllChannels()
    B9.play()
    }
function myFunction210() {
    reset_style(x_pos2[i])
    document.getElementById(x_pos2[i]).innerHTML="10"
    stopAllChannels()
    B10.play()
    }
function myFunction211() {
    reset_style(x_pos2[i])
    document.getElementById(x_pos2[i]).innerHTML="11"
    stopAllChannels()
    B11.play()
    }
function myFunction212() {
    reset_style(x_pos2[i])
    document.getElementById(x_pos2[i]).innerHTML="12"
    stopAllChannels()
    B12.play()
    }
function myFunction213() {
    reset_style(x_pos2[i])
    document.getElementById(x_pos2[i]).innerHTML="13"
    stopAllChannels()
    B13.play()
    }
function myFunction214() {
    reset_style(x_pos2[i])
    document.getElementById(x_pos2[i]).innerHTML="14"
    stopAllChannels()
    B14.play()
    }
function myFunction215() {
    reset_style(x_pos2[i])
    document.getElementById(x_pos2[i]).innerHTML="15"
    stopAllChannels()
    B15.play()
    }
function myFunction216() {
    reset_style(x_pos2[i])
    document.getElementById(x_pos2[i]).innerHTML="16"
    stopAllChannels()
    B16.play()
    }
function myFunction217() {
    reset_style(x_pos2[i])
    document.getElementById(x_pos2[i]).innerHTML="17"
    stopAllChannels()
    B17.play()
    }
function myFunction218() {
    reset_style(x_pos2[i])
    document.getElementById(x_pos2[i]).innerHTML="18"
    stopAllChannels()
    B18.play()
    }
function myFunction219() {
    reset_style(x_pos2[i])
    document.getElementById(x_pos2[i]).innerHTML="19"
    stopAllChannels()
    B19.play()
    }
function myFunction220() {
    reset_style(x_pos2[i])
    document.getElementById(x_pos2[i]).innerHTML="20"
    stopAllChannels()
    B20.play()
    }
function myFunction221() {
    reset_style(x_pos2[i])
    document.getElementById(x_pos2[i]).innerHTML="21"
    }

function myFunction30() {
    reset_style(x_pos3[i])
    document.getElementById(x_pos3[i]).innerHTML="0"
    stopAllChannels()
    G0.play()
    }
function myFunction31() {
    reset_style(x_pos3[i])
    document.getElementById(x_pos3[i]).innerHTML="1"
    stopAllChannels()
    G1.play()
    }
function myFunction32() {
    reset_style(x_pos3[i])
    document.getElementById(x_pos3[i]).innerHTML="2"
    stopAllChannels()
    G2.play()
    }
function myFunction33() {
    reset_style(x_pos3[i])
    document.getElementById(x_pos3[i]).innerHTML="3"
    stopAllChannels()
    G3.play()
    }
function myFunction34() {
    reset_style(x_pos3[i])
    document.getElementById(x_pos3[i]).innerHTML="4"
    stopAllChannels()
    G4.play()
    }
function myFunction35() {
    reset_style(x_pos3[i])
    document.getElementById(x_pos3[i]).innerHTML="5"
    stopAllChannels()
    G5.play()
    }
function myFunction36() {
    reset_style(x_pos3[i])
    document.getElementById(x_pos3[i]).innerHTML="6"
    stopAllChannels()
    G6.play()
    }
function myFunction37() {
    reset_style(x_pos3[i])
    document.getElementById(x_pos3[i]).innerHTML="7"
    stopAllChannels()
    G7.play()
    }
function myFunction38() {
    reset_style(x_pos3[i])
    document.getElementById(x_pos3[i]).innerHTML="8"
    stopAllChannels()
    G8.play()
    }
function myFunction39() {
    reset_style(x_pos3[i])
    document.getElementById(x_pos3[i]).innerHTML="9"
    stopAllChannels()
    G9.play()
    }
function myFunction310() {
    reset_style(x_pos3[i])
    document.getElementById(x_pos3[i]).innerHTML="10"
    stopAllChannels()
    G10.play()
    }
function myFunction311() {
    reset_style(x_pos3[i])
    document.getElementById(x_pos3[i]).innerHTML="11"
    stopAllChannels()
    G11.play()
    }
function myFunction312() {
    reset_style(x_pos3[i])
    document.getElementById(x_pos3[i]).innerHTML="12"
    stopAllChannels()
    G12.play()
    }
function myFunction313() {
    reset_style(x_pos3[i])
    document.getElementById(x_pos3[i]).innerHTML="13"
    stopAllChannels()
    G13.play()
    }
function myFunction314() {
    reset_style(x_pos3[i])
    document.getElementById(x_pos3[i]).innerHTML="14"
    stopAllChannels()
    G14.play()
    }
function myFunction315() {
    reset_style(x_pos3[i])
    document.getElementById(x_pos3[i]).innerHTML="15"
    stopAllChannels()
    G15.play()
    }
function myFunction316() {
    reset_style(x_pos3[i])
    document.getElementById(x_pos3[i]).innerHTML="16"
    stopAllChannels()
    G16.play()
    }
function myFunction317() {
    reset_style(x_pos3[i])
    document.getElementById(x_pos3[i]).innerHTML="17"
    stopAllChannels()
    G17.play()
    }
function myFunction318() {
    reset_style(x_pos3[i])
    document.getElementById(x_pos3[i]).innerHTML="18"
    stopAllChannels()
    G18.play()
    }
function myFunction319() {
    reset_style(x_pos3[i])
    document.getElementById(x_pos3[i]).innerHTML="19"
    stopAllChannels()
    G19.play()
    }
function myFunction320() {
    reset_style(x_pos3[i])
    document.getElementById(x_pos3[i]).innerHTML="20"
    stopAllChannels()
    G20.play()
    }
function myFunction321() {
    reset_style(x_pos3[i])
    document.getElementById(x_pos3[i]).innerHTML="21"
    }

function myFunction40() {
    reset_style(x_pos4[i])
    document.getElementById(x_pos4[i]).innerHTML="0"
    stopAllChannels()
    D0.play()
    }
function myFunction41() {
    reset_style(x_pos4[i])
    document.getElementById(x_pos4[i]).innerHTML="1"
    stopAllChannels()
    D1.play()
    }
function myFunction42() {
    reset_style(x_pos4[i])
    document.getElementById(x_pos4[i]).innerHTML="2"
    stopAllChannels()
    D2.play()
    }
function myFunction43() {
    reset_style(x_pos4[i])
    document.getElementById(x_pos4[i]).innerHTML="3"
    stopAllChannels()
    D3.play()
    }
function myFunction44() {
    reset_style(x_pos4[i])
    document.getElementById(x_pos4[i]).innerHTML="4"
    stopAllChannels()
    D4.play()
    }
function myFunction45() {
    reset_style(x_pos4[i])
    document.getElementById(x_pos4[i]).innerHTML="5"
    stopAllChannels()
    D5.play()
    }
function myFunction46() {
    reset_style(x_pos4[i])
    document.getElementById(x_pos4[i]).innerHTML="6"
    stopAllChannels()
    D6.play()
    }
function myFunction47() {
    reset_style(x_pos4[i])
    document.getElementById(x_pos4[i]).innerHTML="7"
    stopAllChannels()
    D7.play()
    }
function myFunction48() {
    reset_style(x_pos4[i])
    document.getElementById(x_pos4[i]).innerHTML="8"
    stopAllChannels()
    D8.play()
    }
function myFunction49() {
    reset_style(x_pos4[i])
    document.getElementById(x_pos4[i]).innerHTML="9"
    stopAllChannels()
    D9.play()
    }
function myFunction410() {
    reset_style(x_pos4[i])
    document.getElementById(x_pos4[i]).innerHTML="10"
    stopAllChannels()
    D10.play()
    }
function myFunction411() {
    reset_style(x_pos4[i])
    document.getElementById(x_pos4[i]).innerHTML="11"
    stopAllChannels()
    D11.play()
    }
function myFunction412() {
    reset_style(x_pos4[i])
    document.getElementById(x_pos4[i]).innerHTML="12"
    stopAllChannels()
    D12.play()
    }
function myFunction413() {
    reset_style(x_pos4[i])
    document.getElementById(x_pos4[i]).innerHTML="13"
    stopAllChannels()
    D13.play()
    }
function myFunction414() {
    reset_style(x_pos4[i])
    document.getElementById(x_pos4[i]).innerHTML="14"
    stopAllChannels()
    D14.play()
    }
function myFunction415() {
    reset_style(x_pos4[i])
    document.getElementById(x_pos4[i]).innerHTML="15"
    stopAllChannels()
    D15.play()
    }
function myFunction416() {
    reset_style(x_pos4[i])
    document.getElementById(x_pos4[i]).innerHTML="16"
    stopAllChannels()
    D16.play()
    }
function myFunction417() {
    reset_style(x_pos4[i])
    document.getElementById(x_pos4[i]).innerHTML="17"
    stopAllChannels()
    D17.play()
    }
function myFunction418() {
    reset_style(x_pos4[i])
    document.getElementById(x_pos4[i]).innerHTML="18"
    stopAllChannels()
    D18.play()
    }
function myFunction419() {
    reset_style(x_pos4[i])
    document.getElementById(x_pos4[i]).innerHTML="19"
    stopAllChannels()
    D19.play()
    }
function myFunction420() {
    reset_style(x_pos4[i])
    document.getElementById(x_pos4[i]).innerHTML="20"
    stopAllChannels()
    D20.play()
    }
function myFunction421() {
    reset_style(x_pos4[i])
    document.getElementById(x_pos4[i]).innerHTML="21"
    }
function myFunction50() {
    reset_style(x_pos5[i])
    document.getElementById(x_pos5[i]).innerHTML="0"
    stopAllChannels()
    A0.play()
    }
function myFunction51() {
    reset_style(x_pos5[i])
    document.getElementById(x_pos5[i]).innerHTML="1"
    stopAllChannels()
    A1.play()
    }
function myFunction52() {
    reset_style(x_pos5[i])
    document.getElementById(x_pos5[i]).innerHTML="2"
    stopAllChannels()
    A2.play()
    }
function myFunction53() {
    reset_style(x_pos5[i])
    document.getElementById(x_pos5[i]).innerHTML="3"
    stopAllChannels()
    A3.play()
    }
function myFunction54() {
    reset_style(x_pos5[i])
    document.getElementById(x_pos5[i]).innerHTML="4"
    stopAllChannels()
    A4.play()
    }
function myFunction55() {
    reset_style(x_pos5[i])
    document.getElementById(x_pos5[i]).innerHTML="5"
    stopAllChannels()
    A5.play()
    }
function myFunction56() {
    reset_style(x_pos5[i])
    document.getElementById(x_pos5[i]).innerHTML="6"
    stopAllChannels()
    A6.play()
    }
function myFunction57() {
    reset_style(x_pos5[i])
    document.getElementById(x_pos5[i]).innerHTML="7"
    stopAllChannels()
    A7.play()
    }
function myFunction58() {
    reset_style(x_pos5[i])
    document.getElementById(x_pos5[i]).innerHTML="8"
    stopAllChannels()
    A8.play()
    }
function myFunction59() {
    reset_style(x_pos5[i])
    document.getElementById(x_pos5[i]).innerHTML="9"
    stopAllChannels()
    A9.play()
    }
function myFunction510() {
    reset_style(x_pos5[i])
    document.getElementById(x_pos5[i]).innerHTML="10"
    stopAllChannels()
    A10.play()
    }
function myFunction511() {
    reset_style(x_pos5[i])
    document.getElementById(x_pos5[i]).innerHTML="11"
    stopAllChannels()
    A11.play()
    }
function myFunction512() {
    reset_style(x_pos5[i])
    document.getElementById(x_pos5[i]).innerHTML="12"
    stopAllChannels()
    A12.play()
    }
function myFunction513() {
    reset_style(x_pos5[i])
    document.getElementById(x_pos5[i]).innerHTML="13"
    stopAllChannels()
    A13.play()
    }
function myFunction514() {
    reset_style(x_pos5[i])
    document.getElementById(x_pos5[i]).innerHTML="14"
    stopAllChannels()
    A14.play()
    }
function myFunction515() {
    reset_style(x_pos5[i])
    document.getElementById(x_pos5[i]).innerHTML="15"
    stopAllChannels()
    A15.play()
    }
function myFunction516() {
    reset_style(x_pos5[i])
    document.getElementById(x_pos5[i]).innerHTML="16"
    stopAllChannels()
    A16.play()
    }
function myFunction517() {
    reset_style(x_pos5[i])
    document.getElementById(x_pos5[i]).innerHTML="17"
    stopAllChannels()
    A17.play()
    }
function myFunction518() {
    reset_style(x_pos5[i])
    document.getElementById(x_pos5[i]).innerHTML="18"
    stopAllChannels()
    A18.play()
    }
function myFunction519() {
    reset_style(x_pos5[i])
    document.getElementById(x_pos5[i]).innerHTML="19"
    stopAllChannels()
    A19.play()
    }
function myFunction520() {
    reset_style(x_pos5[i])
    document.getElementById(x_pos5[i]).innerHTML="20"
    stopAllChannels()
    A20.play()
    }
function myFunction521() {
    reset_style(x_pos5[i])
    document.getElementById(x_pos5[i]).innerHTML="21"
    }
function myFunction60() {
    reset_style(x_pos6[i])
    document.getElementById(x_pos6[i]).innerHTML="0"
    stopAllChannels()
    L0.play()
    }
function myFunction61() {
    reset_style(x_pos6[i])
    document.getElementById(x_pos6[i]).innerHTML="1"
    stopAllChannels()
    L1.play()
    }
function myFunction62() {
    reset_style(x_pos6[i])
    document.getElementById(x_pos6[i]).innerHTML="2"
    stopAllChannels()
    L2.play()
    }
function myFunction63() {
    reset_style(x_pos6[i])
    document.getElementById(x_pos6[i]).innerHTML="3"
    stopAllChannels()
    L3.play()
    }
function myFunction64() {
    reset_style(x_pos6[i])
    document.getElementById(x_pos6[i]).innerHTML="4"
    stopAllChannels()
    L4.play()
    }
function myFunction65() {
    reset_style(x_pos6[i])
    document.getElementById(x_pos6[i]).innerHTML="5"
    stopAllChannels()
    L5.play()
    }
function myFunction66() {
    reset_style(x_pos6[i])
    document.getElementById(x_pos6[i]).innerHTML="6"
    stopAllChannels()
    L6.play()
    }
function myFunction67() {
    reset_style(x_pos6[i])
    document.getElementById(x_pos6[i]).innerHTML="7"
    stopAllChannels()
    L7.play()
    }
function myFunction68() {
    reset_style(x_pos6[i])
    document.getElementById(x_pos6[i]).innerHTML="8"
    stopAllChannels()
    L8.play()
    }
function myFunction69() {
    reset_style(x_pos6[i])
    document.getElementById(x_pos6[i]).innerHTML="9"
    stopAllChannels()
    L9.play()
    }
function myFunction610() {
    reset_style(x_pos6[i])
    document.getElementById(x_pos6[i]).innerHTML="10"
    stopAllChannels()
    L10.play()
    }
function myFunction611() {
    reset_style(x_pos6[i])
    document.getElementById(x_pos6[i]).innerHTML="11"
    stopAllChannels()
    L11.play()
    }
function myFunction612() {
    reset_style(x_pos6[i])
    document.getElementById(x_pos6[i]).innerHTML="12"
    stopAllChannels()
    L12.play()
    }
function myFunction613() {
    reset_style(x_pos6[i])
    document.getElementById(x_pos6[i]).innerHTML="13"
    stopAllChannels()
    L13.play()
    }
function myFunction614() {
    reset_style(x_pos6[i])
    document.getElementById(x_pos6[i]).innerHTML="14"
    stopAllChannels()
    L14.play()
    }
function myFunction615() {
    reset_style(x_pos6[i])
    document.getElementById(x_pos6[i]).innerHTML="15"
    stopAllChannels()
    L15.play()
    }
function myFunction616() {
    reset_style(x_pos6[i])
    document.getElementById(x_pos6[i]).innerHTML="16"
    stopAllChannels()
    L16.play()
    }
function myFunction617() {
    reset_style(x_pos6[i])
    document.getElementById(x_pos6[i]).innerHTML="17"
    stopAllChannels()
    L17.play()
    }
function myFunction618() {
    reset_style(x_pos6[i])
    document.getElementById(x_pos6[i]).innerHTML="18"
    stopAllChannels()
    L18.play()
    }
function myFunction619() {
    reset_style(x_pos6[i])
    document.getElementById(x_pos6[i]).innerHTML="19"
    stopAllChannels()
    L19.play()
    }
function myFunction620() {
    reset_style(x_pos6[i])
    document.getElementById(x_pos6[i]).innerHTML="20"
    stopAllChannels()
    L20.play()
    }
function myFunction621() {
    reset_style(x_pos6[i])
    document.getElementById(x_pos6[i]).innerHTML="21"
    	
    }



function myFunctionClear1(){
	document.getElementById(x_pos[i]).innerHTML=""
}
function myFunctionClear2(){
	document.getElementById(x_pos2[i]).innerHTML=""
}
function myFunctionClear3(){
	document.getElementById(x_pos3[i]).innerHTML=""
}
function myFunctionClear4(){
	document.getElementById(x_pos4[i]).innerHTML=""
}
function myFunctionClear5(){
	document.getElementById(x_pos5[i]).innerHTML=""
}
function myFunctionClear6(){
	document.getElementById(x_pos6[i]).innerHTML=""
}


document.getElementById("strum_1").addEventListener("mouseover", function(){
    strum_1();
});
document.getElementById("strum_2").addEventListener("mouseover", function(){
    strum_2();
});
document.getElementById("strum_3").addEventListener("mouseover", function(){
    strum_3();
});
document.getElementById("strum_4").addEventListener("mouseover", function(){
    strum_4();
});
document.getElementById("strum_5").addEventListener("mouseover", function(){
    strum_5();
});
document.getElementById("strum_6").addEventListener("mouseover", function(){
    strum_6();
});
function strum_1(){
    reset_style(x_pos[i])
    document.getElementById(x_pos[i]).innerHTML="|"
    document.getElementById(x_pos[i]).style.left="20px"
}
function strum_2(){
    reset_style(x_pos2[i])
    document.getElementById(x_pos2[i]).innerHTML="|"
    document.getElementById(x_pos2[i]).style.left="20px"
}
function strum_3(){
    reset_style(x_pos3[i])
    document.getElementById(x_pos3[i]).innerHTML="|"
    document.getElementById(x_pos3[i]).style.left="20px"
}
function strum_4(){
    reset_style(x_pos4[i])
    document.getElementById(x_pos4[i]).innerHTML="|"
    document.getElementById(x_pos4[i]).style.left="20px"
}
function strum_5(){
    reset_style(x_pos5[i])
    document.getElementById(x_pos5[i]).innerHTML="|"
    document.getElementById(x_pos5[i]).style.left="20px"
}
function strum_6(){
    reset_style(x_pos6[i])
    document.getElementById(x_pos6[i]).innerHTML="|"
    document.getElementById(x_pos6[i]).style.left="20px"
}




function slidedown_1(){
    reset_style(x_pos[i])
    document.getElementById(x_pos[i]).innerHTML="\\"
    document.getElementById(x_pos[i]).style.left="20px"
}
function slidedown_2(){
    reset_style(x_pos2[i])
    document.getElementById(x_pos2[i]).innerHTML="\\"
    document.getElementById(x_pos2[i]).style.left="20px"
}
function slidedown_3(){
    reset_style(x_pos3[i])
    document.getElementById(x_pos3[i]).innerHTML="\\"
    document.getElementById(x_pos3[i]).style.left="20px"
}
function slidedown_4(){
    reset_style(x_pos4[i])
    document.getElementById(x_pos4[i]).innerHTML="\\"
    document.getElementById(x_pos4[i]).style.left="20px"
}
function slidedown_5(){
    reset_style(x_pos5[i])
    document.getElementById(x_pos5[i]).innerHTML="\\"
    document.getElementById(x_pos5[i]).style.left="20px"
}
function slidedown_6(){
    reset_style(x_pos6[i])
    document.getElementById(x_pos6[i]).innerHTML="\\"
    document.getElementById(x_pos6[i]).style.left="20px"
}


function slideup_1(){
    reset_style(x_pos[i])
    document.getElementById(x_pos[i]).innerHTML="/"
    document.getElementById(x_pos[i]).style.left="20px"
}
function slideup_2(){
    reset_style(x_pos2[i])
    document.getElementById(x_pos2[i]).innerHTML="/"
    document.getElementById(x_pos2[i]).style.left="20px"
}
function slideup_3(){
    reset_style(x_pos3[i])
    document.getElementById(x_pos3[i]).innerHTML="/"
    document.getElementById(x_pos3[i]).style.left="20px"
}
function slideup_4(){
    reset_style(x_pos4[i])
    document.getElementById(x_pos4[i]).innerHTML="/"
    document.getElementById(x_pos4[i]).style.left="20px"
}
function slideup_5(){
    reset_style(x_pos5[i])
    document.getElementById(x_pos5[i]).innerHTML="/"
    document.getElementById(x_pos5[i]).style.left="20px"
}
function slideup_6(){
    reset_style(x_pos6[i])
    document.getElementById(x_pos6[i]).innerHTML="/"
    document.getElementById(x_pos6[i]).style.left="20px"
}

document.getElementById("vibrato_1").addEventListener("mouseover", function(){
    vibrato_1();
});
document.getElementById("vibrato_2").addEventListener("mouseover", function(){
    vibrato_2();
});
document.getElementById("vibrato_3").addEventListener("mouseover", function(){
    vibrato_3();
});
document.getElementById("vibrato_4").addEventListener("mouseover", function(){
    vibrato_4();
});
document.getElementById("vibrato_5").addEventListener("mouseover", function(){
    vibrato_5();
});
document.getElementById("vibrato_6").addEventListener("mouseover", function(){
    vibrato_6();
});
function vibrato_1(){
    reset_style(x_pos[i])
    document.getElementById(x_pos[i]).innerHTML="v"
    document.getElementById(x_pos[i]).style.left="20px"
}
function vibrato_2(){
    reset_style(x_pos2[i])
    document.getElementById(x_pos2[i]).innerHTML="v"
    document.getElementById(x_pos2[i]).style.left="20px"
}
function vibrato_3(){
    reset_style(x_pos3[i])
    document.getElementById(x_pos3[i]).innerHTML="v"
    document.getElementById(x_pos3[i]).style.left="20px"
}
function vibrato_4(){
    reset_style(x_pos4[i])
    document.getElementById(x_pos4[i]).innerHTML="v"
    document.getElementById(x_pos4[i]).style.left="20px"
}
function vibrato_5(){
    reset_style(x_pos5[i])
    document.getElementById(x_pos5[i]).innerHTML="v"
    document.getElementById(x_pos5[i]).style.left="20px"
}
function vibrato_6(){
    reset_style(x_pos6[i])
    document.getElementById(x_pos6[i]).innerHTML="v"
    document.getElementById(x_pos6[i]).style.left="20px"
}


function bend_1(){
    reset_style(x_pos[i])
    document.getElementById(x_pos[i]).innerHTML="b"
    document.getElementById(x_pos[i]).style.left="20px"
}
function bend_2(){
    reset_style(x_pos2[i])
    document.getElementById(x_pos2[i]).innerHTML="b"
    document.getElementById(x_pos2[i]).style.left="20px"
}function bend_3(){
    reset_style(x_pos3[i])
    document.getElementById(x_pos3[i]).innerHTML="b"
    document.getElementById(x_pos3[i]).style.left="20px"
}function bend_4(){
    reset_style(x_pos4[i])
    document.getElementById(x_pos4[i]).innerHTML="b"
    document.getElementById(x_pos4[i]).style.left="20px"
}function bend_5(){
    reset_style(x_pos5[i])
    document.getElementById(x_pos5[i]).innerHTML="b"
    document.getElementById(x_pos5[i]).style.left="20px"
}function bend_6(){
    reset_style(x_pos6[i])
    document.getElementById(x_pos6[i]).innerHTML="b"
    document.getElementById(x_pos6[i]).style.left="20px"
}

function pull_1(){
    reset_style(x_pos[i])
    document.getElementById(x_pos[i]).innerHTML="p"
    document.getElementById(x_pos[i]).style.left="20px"
}
function pull_2(){
    reset_style(x_pos2[i])
    document.getElementById(x_pos2[i]).innerHTML="p"
    document.getElementById(x_pos2[i]).style.left="20px"
}
function pull_3(){
    reset_style(x_pos3[i])
    document.getElementById(x_pos3[i]).innerHTML="p"
    document.getElementById(x_pos3[i]).style.left="20px"
}
function pull_4(){
    reset_style(x_pos4[i])
    document.getElementById(x_pos4[i]).innerHTML="p"
    document.getElementById(x_pos4[i]).style.left="20px"
}
function pull_5(){
    reset_style(x_pos5[i])
    document.getElementById(x_pos5[i]).innerHTML="p"
    document.getElementById(x_pos5[i]).style.left="20px"
}
function pull_6(){
    reset_style(x_pos6[i])
    document.getElementById(x_pos6[i]).innerHTML="p"
    document.getElementById(x_pos6[i]).style.left="20px"
}


function hammer_1(){
    reset_style(x_pos[i])
    document.getElementById(x_pos[i]).innerHTML="h"
    document.getElementById(x_pos[i]).style.left="20px"
}
function hammer_2(){
    reset_style(x_pos2[i])
    document.getElementById(x_pos2[i]).innerHTML="h"
    document.getElementById(x_pos2[i]).style.left="20px"
}
function hammer_3(){
    reset_style(x_pos3[i])
    document.getElementById(x_pos3[i]).innerHTML="h"
    document.getElementById(x_pos3[i]).style.left="20px"
}
function hammer_4(){
    reset_style(x_pos4[i])
    document.getElementById(x_pos4[i]).innerHTML="h"
    document.getElementById(x_pos4[i]).style.left="20px"
}
function hammer_5(){
    reset_style(x_pos5[i])
    document.getElementById(x_pos5[i]).innerHTML="h"
    document.getElementById(x_pos5[i]).style.left="20px"
}
function hammer_6(){
    reset_style(x_pos6[i])
    document.getElementById(x_pos6[i]).innerHTML="h"
    document.getElementById(x_pos6[i]).style.left="20px"
}

document.getElementById("strum_down_1").addEventListener("mouseover", function(){
    strum_down_1();
});
document.getElementById("strum_down_2").addEventListener("mouseover", function(){
    strum_down_2();
});
document.getElementById("strum_down_3").addEventListener("mouseover", function(){
    strum_down_3();
});
document.getElementById("strum_down_4").addEventListener("mouseover", function(){
    strum_down_4();
});
document.getElementById("strum_down_5").addEventListener("mouseover", function(){
    strum_down_5();
});
document.getElementById("strum_down_6").addEventListener("mouseover", function(){
    strum_down_6();
});
function strum_down_1(){
    reset_style(x_pos[i])
    document.getElementById(x_pos[i]).innerHTML="^"
    document.getElementById(x_pos[i]).style.left="20px"
}
function strum_down_2(){
    reset_style(x_pos2[i])	 
    document.getElementById(x_pos2[i]).innerHTML="^"
    document.getElementById(x_pos2[i]).style.left="20px"
}
function strum_down_3(){
    reset_style(x_pos3[i])
    document.getElementById(x_pos3[i]).innerHTML="^"
    document.getElementById(x_pos3[i]).style.left="20px"
}
function strum_down_4(){
    reset_style(x_pos4[i])	 
    document.getElementById(x_pos4[i]).innerHTML="^"
    document.getElementById(x_pos4[i]).style.left="20px"
}
function strum_down_5(){
    reset_style(x_pos5[i])
    document.getElementById(x_pos5[i]).innerHTML="^"
    document.getElementById(x_pos5[i]).style.left="20px"
}
function strum_down_6(){
    reset_style(x_pos6[i])	 
    document.getElementById(x_pos6[i]).innerHTML="^"
    document.getElementById(x_pos6[i]).style.left="20px"
}



function ah_1(){
    reset_style(x_pos[i])
    document.getElementById(x_pos[i]).innerHTML="a"
    document.getElementById(x_pos[i]).style.left="20px"
}
function ah_2(){
    reset_style(x_pos2[i])
    document.getElementById(x_pos2[i]).innerHTML="a"
    document.getElementById(x_pos2[i]).style.left="20px"
}
function ah_3(){
    reset_style(x_pos3[i])
    document.getElementById(x_pos3[i]).innerHTML="a"
    document.getElementById(x_pos3[i]).style.left="20px"
}
function ah_4(){
    reset_style(x_pos4[i])
    document.getElementById(x_pos4[i]).innerHTML="a"
    document.getElementById(x_pos4[i]).style.left="20px"
}
function ah_5(){
    reset_style(x_pos5[i])
    document.getElementById(x_pos5[i]).innerHTML="a"
    document.getElementById(x_pos5[i]).style.left="20px"
}
function ah_6(){
    reset_style(x_pos6[i])
    document.getElementById(x_pos6[i]).innerHTML="a"
    document.getElementById(x_pos6[i]).style.left="20px"
}


function tap_1(){
    reset_style(x_pos[i])
    document.getElementById(x_pos[i]).innerHTML="t"
    document.getElementById(x_pos[i]).style.left="20px"
}
function tap_2(){
    reset_style(x_pos2[i])
    document.getElementById(x_pos2[i]).innerHTML="t"
    document.getElementById(x_pos2[i]).style.left="20px"
}
function tap_3(){
    reset_style(x_pos3[i])
    document.getElementById(x_pos3[i]).innerHTML="t"
    document.getElementById(x_pos3[i]).style.left="20px"
}
function tap_4(){
    reset_style(x_pos4[i])
    document.getElementById(x_pos4[i]).innerHTML="t"
    document.getElementById(x_pos4[i]).style.left="20px"
}
function tap_5(){
    reset_style(x_pos5[i])
    document.getElementById(x_pos5[i]).innerHTML="t"
    document.getElementById(x_pos5[i]).style.left="20px"
}
function tap_6(){
    reset_style(x_pos6[i])
    document.getElementById(x_pos6[i]).innerHTML="t"
    document.getElementById(x_pos6[i]).style.left="20px"
}


function mute_string_1(){
    reset_style(x_pos[i])
    document.getElementById(x_pos[i]).innerHTML="X"
}
function mute_string_2(){
    reset_style(x_pos2[i])
    document.getElementById(x_pos2[i]).innerHTML="X"
}
function mute_string_3(){
    reset_style(x_pos3[i])
    document.getElementById(x_pos3[i]).innerHTML="X"
}
function mute_string_4(){
    reset_style(x_pos4[i])
    document.getElementById(x_pos4[i]).innerHTML="X"
}
function mute_string_5(){
    reset_style(x_pos5[i])
    document.getElementById(x_pos5[i]).innerHTML="X"
}
function mute_string_6(){
    reset_style(x_pos6[i])
    document.getElementById(x_pos6[i]).innerHTML="X"
}
function set_focus_tab_block_1(){
    i=0
    var marker=document.getElementById("marker")
    marker.style.marginLeft=0+".px";
    marker.style.top=30+".px";
}
function set_focus_tab_block_2(){
    i=22
    var marker=document.getElementById("marker")
    marker.style.marginLeft=0+".px";
    marker.style.top=270+".px";
}
function set_focus_tab_block_3(){
    i=44
    var marker=document.getElementById("marker")
    marker.style.marginLeft=0+".px";
    marker.style.top=510+".px";
}
function set_focus_tab_block_4(){
    i=66
    var marker=document.getElementById("marker")
    marker.style.marginLeft=0+".px";
    marker.style.top=760+".px";
}
function set_focus_tab_block_5(){
    i=88
    var marker=document.getElementById("marker")
    marker.style.marginLeft=0+".px";
    marker.style.top=1000+".px";
}
function set_focus_tab_block_6(){
    i=110
    var marker=document.getElementById("marker")
    marker.style.marginLeft=0+".px";
    marker.style.top=1240+".px";
}
function set_focus_tab_block_7(){
    i=132
    var marker=document.getElementById("marker")
    marker.style.marginLeft=0+".px";
    marker.style.top=1480+".px";
}
function set_focus_tab_block_8(){
    i=154
    var marker=document.getElementById("marker")
    marker.style.marginLeft=0+".px";
    marker.style.top=1730+".px";
}
function set_focus_tab_block_9(){
    i=176
    var marker=document.getElementById("marker")
    marker.style.marginLeft=0+".px";
    marker.style.top=1970+".px";
}
function set_focus_tab_block_10(){
    i=198
    var marker=document.getElementById("marker")
    marker.style.marginLeft=0+".px";
    marker.style.top=2210+".px";
}
function set_focus_tab_block_11(){
    i=220
    var marker=document.getElementById("marker")
    marker.style.marginLeft=0+".px";
    marker.style.top=2450+".px";
}
function set_focus_tab_block_12(){
    i=242
    var marker=document.getElementById("marker")
    marker.style.marginLeft=0+".px";
    marker.style.top=2690+".px";
}
function set_focus_tab_block_13(){
    i=264
    var marker=document.getElementById("marker")
    marker.style.marginLeft=0+".px";
    marker.style.top=2930+".px";
}
function set_focus_tab_block_14(){
    i=286
    var marker=document.getElementById("marker")
    marker.style.marginLeft=0+".px";
    marker.style.top=3170+".px";
}
function set_focus_tab_block_15(){
    i=308
    var marker=document.getElementById("marker")
    marker.style.marginLeft=0+".px";
    marker.style.top=3420+".px";
}
function set_focus_tab_block_16(){
    i=330
    var marker=document.getElementById("marker")
    marker.style.marginLeft=0+".px";
    marker.style.top=3660+".px";
}
function set_focus_tab_block_17(){
    i=352
    var marker=document.getElementById("marker")
    marker.style.marginLeft=0+".px";
    marker.style.top=3900+".px";
}
function set_focus_tab_block_18(){
    i=374
    var marker=document.getElementById("marker")
    marker.style.marginLeft=0+".px";
    marker.style.top=4140+".px";
}
function set_focus_tab_block_19(){
    i=396
    var marker=document.getElementById("marker")
    marker.style.marginLeft=0+".px";
    marker.style.top=4380+".px";
}
function set_focus_tab_block_20(){
    i=418
    var marker=document.getElementById("marker")
    marker.style.marginLeft=0+".px";
    marker.style.top=4630+".px";
}

function the_next(){
    i=i+1
    var marker=document.getElementById("marker")
    if(i<22){marker.style.marginLeft=i*45+".px";}
    else if(i<44){marker.style.marginLeft=(i-22)*45+".px";
               marker.style.top=270+".px";}
    else if(i<66){marker.style.marginLeft=(i-44)*45+".px";
               marker.style.top=520+".px";}
    else if(i<88){marker.style.marginLeft=(i-66)*45+".px";
               marker.style.top=760+".px";}
    else if(i<110){marker.style.marginLeft=(i-88)*45+".px";
               marker.style.top=1000+".px";}
    else if(i<132){marker.style.marginLeft=(i-110)*45+".px";
               marker.style.top=1240+".px";}
    else if(i<154){marker.style.marginLeft=(i-132)*45+".px";
               marker.style.top=1480+".px";}
    else if(i<176){marker.style.marginLeft=(i-154)*45+".px";
               marker.style.top=1730+".px";}
    else if(i<198){marker.style.marginLeft=(i-176)*45+".px";
               marker.style.top=1970+".px";}
    else if(i<220){marker.style.marginLeft=(i-198)*45+".px";
               marker.style.top=2210+".px";}
    else if(i<242){marker.style.marginLeft=(i-220)*45+".px";
               marker.style.top=2450+".px";}
    else if(i<264){marker.style.marginLeft=(i-242)*45+".px";
               marker.style.top=2690+".px";}
    else if(i<286){marker.style.marginLeft=(i-264)*45+".px";
               marker.style.top=2930+".px";}
    else if(i<308){marker.style.marginLeft=(i-286)*45+".px";
               marker.style.top=3170+".px";}
    else if(i<330){marker.style.marginLeft=(i-308)*45+".px";
               marker.style.top=3420+".px";}
    else if(i<352){marker.style.marginLeft=(i-330)*45+".px";
               marker.style.top=3660+".px";}
    else if(i<374){marker.style.marginLeft=(i-352)*45+".px";
               marker.style.top=3900+".px";}
    else if(i<396){marker.style.marginLeft=(i-374)*45+".px";
               marker.style.top=4140+".px";}
    else if(i<418){marker.style.marginLeft=(i-396)*45+".px";
               marker.style.top=4380+".px";}
    else if(i<440){marker.style.marginLeft=(i-418)*45+".px";
               marker.style.top=4630+".px";}


}
function the_prev(){
    i=i-1
    var marker=document.getElementById("marker")
    if(i<22){marker.style.marginLeft=i*45+".px";
            marker.style.top=30+".px";}
    else if(i<44){marker.style.marginLeft=(i-22)*45+".px";
               marker.style.top=270+".px";}
    else if(i<66){marker.style.marginLeft=(i-44)*45+".px";
               marker.style.top=520+".px";}
    else if(i<88){marker.style.marginLeft=(i-66)*45+".px";
               marker.style.top=760+".px";}
    else if(i<110){marker.style.marginLeft=(i-88)*45+".px";
               marker.style.top=1000+".px";}
    else if(i<132){marker.style.marginLeft=(i-110)*45+".px";
               marker.style.top=1240+".px";}
    else if(i<154){marker.style.marginLeft=(i-132)*45+".px";
               marker.style.top=1480+".px";}
    else if(i<176){marker.style.marginLeft=(i-154)*45+".px";
               marker.style.top=1730+".px";}
    else if(i<198){marker.style.marginLeft=(i-176)*45+".px";
               marker.style.top=1970+".px";}
    else if(i<220){marker.style.marginLeft=(i-198)*45+".px";
               marker.style.top=2210+".px";}
    else if(i<242){marker.style.marginLeft=(i-220)*45+".px";
               marker.style.top=2458+".px";}
    else if(i<264){marker.style.marginLeft=(i-242)*45+".px";
               marker.style.top=2690+".px";}
    else if(i<286){marker.style.marginLeft=(i-264)*45+".px";
               marker.style.top=2930+".px";}
    else if(i<308){marker.style.marginLeft=(i-286)*45+".px";
               marker.style.top=3170+".px";}
    else if(i<330){marker.style.marginLeft=(i-308)*45+".px";
               marker.style.top=3420+".px";}
    else if(i<352){marker.style.marginLeft=(i-330)*45+".px";
               marker.style.top=3660+".px";}
    else if(i<374){marker.style.marginLeft=(i-352)*45+".px";
               marker.style.top=3900+".px";}
    else if(i<396){marker.style.marginLeft=(i-374)*45+".px";
               marker.style.top=4140+".px";}
    else if(i<418){marker.style.marginLeft=(i-396)*45+".px";
               marker.style.top=4380+".px";}
    else if(i<440){marker.style.marginLeft=(i-418)*45+".px";
               }
    //marker.style.marginLeft=i*44+".px";
}

