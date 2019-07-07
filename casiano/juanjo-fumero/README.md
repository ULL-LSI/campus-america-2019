# Juan Fumero Email <jjfumero@gmail.com> 3 may. 2019 8:12 Para Coromoto, mí

primero, quiero volver agradecerles su tiempo. Fue un placer poder hablar de lo que hacemos en Manchester y de Java VMs en general. 

Como les habia dicho, les paso unos enlaces con mas infomacion sobre Truffle y Graal. 

## Truffle: framework para desarollo de lenguajes dynamicos mediante ASTs sobre Graal: R, Ruby, JS, Python, SOM, etc. Tambien hay prototypos para LLVM (Sulong project).

* https://github.com/smarr/truffle


## Graal: JIT compiler escrito en Java para JVM. 

* Github: https://github.com/oracle/graal
* Docs  :  https://github.com/oracle/graal/blob/master/docs/Publications.md  ,  https://www.graalvm.org/  
* Mario Wolczko - JVM Architect (Oracle Labs) esta enseniando compiladores con Truffle y Graal en Berkley: http://www.wolczko.com/CS294/index.html
* Truffle and Graal tutorials by Thomas: https://www.youtube.com/watch?v=RLsG2kE1EMI&list=PLr0LdMGRr2nc5MPRvWzKmDSan1VSDn8oS&index=4 

Ayer no los comente todo, me deje muchas cosas para simplificar. Uno de los fuertes de Truffle es polyglot, la habilidad de cambiar de lenguaje en el runtime sobre la misma ejecucion en Graal sin sacrificar performance.


* https://www.youtube.com/watch?v=TQMKPRc6cbE


El Key paper es: "One VM to Rule Them All" -> http://lafo.ssw.uni-linz.ac.at/papers/2013_Onward_OneVMToRuleThemAll.pdf 


[] TornadoVM: maquina virtual desarrollada en Manchester que usa Graal JIT para ejecutar codigo Java en GPUs, FPGAs y multi-core

Github: https://github.com/beehive-lab/TornadoVM
Tutorial de reconfiguration dinamica entre multi-core y GPUs y FPGA con Tornado: https://e2data.eu/blog/tornadovm-dynamic-reconfiguration-on-heterogeneous-hardware 

Paper en que explicamos el compilador: https://www.researchgate.net/publication/327097904_Exploiting_High-Performance_Heterogeneous_Hardware_for_Java_Programs_using_Graal 

## Algoritmos evolutivos

Me gustaria tener mas informacion acerca de lo que hablamos ayer sobre algoritmos evolutivos. Tienen algunos enlaces/papers claves para introducirme en el tema? Algun punto a codigos de ejemplo que ilustren los conceptos de algoritmos evolutivos?
Mi intencion es, en cuanto tenga tiempo, hacer una prueba de concepto con lo que tenemos en Manchester. 


# References found in Internet

* [Improving optimization sequence of compilers by using sequence selection approach June 2016 S. RamaniBoominathan PerumalBoominathan PerumalS.J. NarayananRajkumar SoundrapandiyanRajkumar Soundrapandiyan](https://www.researchgate.net/publication/306215462_Improving_optimization_sequence_of_compilers_by_using_sequence_selection_approach)
* [An Optimized Tuning of Genetic Algorithm Parameters in Compiler Flag Selection Based on Compilation and Execution Duration Thayalan SandranEmail authorNordin ZakariaAnindya Jyoti Pal](https://link.springer.com/chapter/10.1007/978-81-322-0491-6_55)
* [COLE: Compiler Optimization Level Exploration
Kenneth Hoste Lieven Eeckhout](https://users.elis.ugent.be/~leeckhou/papers/cgo08.pdf)
