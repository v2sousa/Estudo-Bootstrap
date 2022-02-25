(function () {/*Função de auto invocação, justificado pelos () */

    'use strict' /* Essa informação é opcional, mas garante digitar JS Valido */
    /**A variável abaixo garante que todos os formularios needs-validation sejam submetidos a validação do JS */
    var forms = document.querySelectorAll('.needs-validation');

    Array.prototype.slice.call(forms)
        .forEach(function (form) { 
            
            form.addEventListener('submit', function(event){
                if(!form.checkValidity()){
                    event.preventDefault();
                    event.stopPropagation();
                }

                form.classList.add('was-validated');
            
            }, false);
        });
})()