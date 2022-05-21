document.addEventListener('DOMContentLoaded',function()
{
    controller.transmitter();
});

const controller =
{
    transmitter: function () {
        this.template();
        this.shortText();

    },
    template: function()
    {
    },
    shortText: function()
    {
        const tableTr = document.querySelectorAll('table tr');
        [].forEach.call(tableTr,function(el){
            let element = el.firstElementChild;
            elementLen = element.textContent.length;
            if(elementLen > 25){
                element.textContent = `${element.textContent.slice(0,25)}...`;
            }
        });
    },
}