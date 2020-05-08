/*수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.*/
/*마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, */
/*완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.*/

function solution(participant, completion) {
    var answer = '';
    var len=participant.length;
    
    //참여자,완주자들 배열을 유니코드순서대로 정렬
    participant.sort();
    completion.sort();

    for(var i=0;i<len;i++){
        if(participant[i]!==completion[i]){
            answer=participant[i];
            break;
        }
    }

    return answer;
}
