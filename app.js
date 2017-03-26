var score_board = [];
var frame = [];

function create_frame(pins) {
    var pins_stricked_down = pins;
    if (score_board.length == 0) {
        if (pins_stricked_down == 10) {
            frame.push(pins_stricked_down);
            frame.push(0);
            score_board.push(frame);
        } else {
            frame.push(pins_stricked_down);
            score_board.push(frame);
        }
    } else {
        if (frame.length < 2) {
            if (pins_stricked_down == 10) {
                frame.push(pins_stricked_down);
                frame.push(0);
            } else {
                frame.push(pins_stricked_down);
            }
        } else {
            frame = [];
            if (pins_stricked_down == 10) {
                frame.push(pins_stricked_down);
                frame.push(0);
                score_board.push(frame);
            } else {
                frame.push(pins_stricked_down);
                score_board.push(frame);
            }
        }
    }
    calculate_score(score_board);
}

function calculate_score(score_board) {
    var tow_dimentional_array = score_board;
    var sprare_frame_score = spare_frame_score_calculator(tow_dimentional_array);
    var splash_frame_score = splash_frame_score_calculator(tow_dimentional_array);
    var normal_frame_score = normal_frame_score_calculator(tow_dimentional_array);
    console.log(sprare_frame_score + normal_frame_score + splash_frame_score);
}

function spare_frame_score_calculator(score_calculator_array) {
    var score_calculator_array = score_calculator_array;
    var spare_score = 0;
    for (var i = 0; i < score_calculator_array.length; i++) {
        var frame = score_calculator_array[i];
        if ((frame[0] == 10) && (i <= 9)) {
            if ((score_calculator_array.length > (i + 1))) {
                var next_frame = score_calculator_array[i + 1];
                if ((next_frame[0] == 10) && (score_calculator_array.length > (i + 1 + 1))) {
                    var nex_to_next_frame = score_calculator_array[i + 1 + 1];
                    spare_score += frame[0] + next_frame[0] + nex_to_next_frame[0];
                } else {
                    if ((next_frame.length == 2) && (next_frame[0] != 10)) {
                        spare_score += frame[0] + next_frame[0] + next_frame[1];
                    }
                }
            }
        }
    }
    return spare_score;
}

function splash_frame_score_calculator(score_calculator_array) {
    var score_calculator_array = score_calculator_array;
    var splash_score = 0;
    for (var i = 0; i < score_calculator_array.length; i++) {
        var splash_frame = score_calculator_array[i];
        if (((splash_frame[0] + splash_frame[1]) == 10) && (splash_frame[1] > 0)) {
            if (score_calculator_array.length >= (i + 2)) {
                var next_frame = score_calculator_array[i + 1];
                splash_score += splash_frame[0] + splash_frame[1] + next_frame[0];
            }
        }
    }
    return splash_score;
}

function normal_frame_score_calculator(score_calculator_array) {
    var score_calculator_array = score_calculator_array;
    var normal_score = 0;
    for (var i = 0; i < score_calculator_array.length; i++) {
        var frame = score_calculator_array[i];
        for (var j = 0; j < frame.length; j++) {
            if ((frame[j] + frame[j + 1]) < 10) {
                normal_score += frame[j] + frame[j + 1];
            }
        }
    }
    return normal_score;
}

/*TEST CASE - 1*/
create_frame(1);
create_frame(2);
create_frame(10);
create_frame(10);
create_frame(10);
create_frame(8);
create_frame(1);

/*TEST CASE - 2*/
/*create_frame(3);
create_frame(7);
create_frame(2);
create_frame(7);
create_frame(10);
create_frame(0);
create_frame(0);
create_frame(6);
create_frame(3);
create_frame(7);
create_frame(3);
create_frame(1);
create_frame(0);
create_frame(3);
create_frame(5);
create_frame(3);
create_frame(2);
create_frame(4);
create_frame(6);
create_frame(0);*/

/*TEST CASE - 3*/
/*create_frame(10);
create_frame(10);
create_frame(10);
create_frame(10);
create_frame(10);
create_frame(10);
create_frame(10);
create_frame(10);
create_frame(10);
create_frame(10);
create_frame(10);
create_frame(10);*/

/*TEST CASE - 4*/
/*create_frame(0);
create_frame(10);
create_frame(3);
create_frame(5);
create_frame(3);
create_frame(5);
create_frame(6);
create_frame(3);
create_frame(0);
create_frame(10);
create_frame(4);
create_frame(6);
create_frame(0);
create_frame(0);
create_frame(0);
create_frame(10);
create_frame(7);
create_frame(3);
create_frame(1);
create_frame(6);*/

/*TEST CASE - 5*/
/*create_frame(10);
create_frame(0);
create_frame(0);
create_frame(0);
create_frame(0);
create_frame(0);
create_frame(0);
create_frame(0);
create_frame(0);
create_frame(0);
create_frame(0);
create_frame(0);
create_frame(0);
create_frame(3);
create_frame(7);
create_frame(5);
create_frame(2);
create_frame(1);
create_frame(6);*/

/*TEST CASE - 6*/
/*create_frame(5);
create_frame(3);
create_frame(1);
create_frame(0);
create_frame(5);
create_frame(4);
create_frame(2);
create_frame(5);
create_frame(10);
create_frame(7);
create_frame(3);
create_frame(2);
create_frame(1);
create_frame(7);
create_frame(3);
create_frame(2);
create_frame(3);
create_frame(2);
create_frame(3);*/
