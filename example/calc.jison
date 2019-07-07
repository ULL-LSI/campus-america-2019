%lex
%%

\s+               {/* skip whitespace */}
[0-9]+            { return 'NUM'; }
.                 { return yytext; }

/lex


%%

s   : e { return $1; }
    ;
e   : e '-' e
           { 
              $$ =  $1 - $3; 
           }
    |  NUM { 
              $$ = Number($1);
           }
    ;

