/* Démarrage de l'application */
(function(){
'use strict';
A.render();
A.db.init().then(() => A.render()).catch(e => { console.error(e); A.S.ready = true; A.render(); });
})();
