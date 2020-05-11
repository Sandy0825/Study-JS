/*배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.*/
/*입출력 예*/
/*array	                 commands	                        return*/
/*[1, 5, 2, 6, 3, 7, 4]	[[2, 5, 3], [4, 4, 1], [1, 7, 3]]	[5, 6, 3]*/

function solution(array, commands) {
    var answer = [];
    var comLength = commands.length;

    //command의 각각의 원소에 i,j,k를 읽어온다
    for(var a=0;a<comLength;a++){
        var i = commands[a][0];
        var j = commands[a][1];
        var k = commands[a][2];
        
        //i번째부터 j번째까지의 숫자를 가져온다 slice(i번째에 해당되는배열,j번째 전까지)
        var Newarray = array.slice(i-1,j);
        //숫자를 오름차순으로 배열한다 (간단하게 sort((x,y) => x-y)도 가능)
        Newarray.sort(function(x,y){return x-y;});
        //k번째 수 가져오기
        var num = Newarray[k-1];
        //가져온 수 answer배열에 넣기
        answer.push(num);
    }
    return answer;
}
