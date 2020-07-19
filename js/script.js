const createBtn = $('.btn-create');
const btnChange = $('.btn-change');
const displayText = $('.text');

const var1Node = $('#var1');
const var2Node = $('#var2');
const var3Node = $('#var3');
const var4Node = $('#var4');
const var5Node = $('#var5');
const var6Node = $('#var6');
const speachNode = $('#speach');

const textObj = {
    text:["Жили-были {var1} да {var2}",
    "Была у них {var3}",
    "Снесла {var3} {var4}, не простое - золотое",
    "- {var1} бил, бил - не разбил",
    "- {var2} била, била - не разбила",
    "{var5} бежала, {var6} задела, {var4} упало и разбилось.",
    "{var1} плачет, {var2} плачет, а {var3} кудахчет:",
    "{speach}"]
};



createBtn.click (function (){
    displayText.html(textObj.text);   

});

btnChange.click (function (){
    const var1 = var1Node.val();
    const var2 = var2Node.val();
    const var3 = var3Node.val();
    const var4 = var4Node.val();
    const var5 = var5Node.val();
    const var6 = var6Node.val();
    const speach = speachNode.val();

    const NewObj = {
        text:[`Жили-были ${var1} да ${var2}. `,
        `Была у них ${var3}. `,
        `Снесла ${var3} ${var4}, не простое - золотое. `,
        `- ${var1} бил, бил - не разбил`,
        `- ${var2} била, била - не разбила`,
        `${var5} бежала, ${var6} задела, ${var4} упало и разбилось.`,
        `${var1} плачет, ${var2} плачет, а ${var3} кудахчет:`,
        `${speach}`]
    };
    displayText.html(NewObj.text);
    
});

