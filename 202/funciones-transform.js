//Define una funcion que construye la matriz de traslacion THREEJS
function traslate(vt){
    var matrizT = new THREE.Matrix4();     //Definir una matriz
    matrizT.set(1, 0, 0, vt[0],
                0, 1, 0, vt[1],
                0, 0, 1, vt[2],
                0, 0, 0, 1);

            return matrizT;       //Retornar la matriz  de traslacion
}

//Define una funcion que construye la matriz de escalado THREEJS
//y aplica el escalado
function escalado(obj,vs, posini){
    tr=[-posini[0],-posini[1],-posini[2]]; //vector para llevar al origen
    obj.applyMatrix(traslate(tr));      //Aplicar matriz para llevar al origen
    var matrizS = new THREE.Matrix4();
    matrizS.set(vs[0],    0,     0, 0,
                    0,vs[1],     0, 0,
                    0,    0, vs[2], 0,
                    0,    0,     0, 1);// Creacion y establecimiento de una matriz para escalado

    obj.applyMatrix(matrizS);          //aplicar escalado
    tr1=[posini[0],posini[1],posini[2]];  //vector para devolver a la posicion
    obj.applyMatrix(traslate(tr1));     //aplicar matriz para devolver el objeto
    return obj
}

function rotacion(angulo, eje){
    var matrizR = new THREE.Matrix4();  //Creacion de una matriz
    var alpha = (angulo*Math.PI)/180;   //Transformacion de grados a radianes
    var cs = Math.cos(alpha);           
    var ss = Math.sin(alpha);           //Seno y Coseno del angulo introducido
    if(eje=='x'){
        matrizR.set(  1,  0,  0, 0,
                      0, cs,-ss, 0, 
                      0, ss, cs, 0,
                      0,  0,  0, 1);    

            return(matrizR);            //Establecimiento y retorno de matriz X

    }else
        if(eje=='y'){
        matrizR.set( cs,  0, ss, 0,
                      0,  1,  0, 0, 
                    -ss,  0, cs, 0,
                      0,  0,  0, 1);    

            return(matrizR);            //Establecimiento y retorno de matriz Y
        }else{
        matrizR.set( cs,-ss,  0, 0,
                     ss, cs,  0, 0, 
                      0,  0,  1, 0,
                      0,  0,  0, 1);    

            return(matrizR);            //Establecimiento y retorno de matriz Z
    }}

    function rotacionReal(obj, angulo, eje, posini){
        var matrizR = new THREE.Matrix4();
        var alpha = (angulo*Math.PI)/180;
        var cs = Math.cos(alpha);
        var ss = Math.sin(alpha);
        tr=[-posini[0],-posini[1],-posini[2]]; //vector para llevar al origen
        obj.applyMatrix(traslate(tr));      //Aplicar matriz para llevar al origen
        if(eje=='x'){
            matrizR.set(  1,  0,  0, 0,
                          0, cs,-ss, 0, 
                          0, ss, cs, 0,
                          0,  0,  0, 1);    
                obj.applyMatrix(matrizR);   //Aplicar matriz de rotacion al objeto
                
    
        }else
            if(eje=='y'){
            matrizR.set( cs,  0, ss, 0,
                          0,  1,  0, 0, 
                        -ss,  0, cs, 0,
                          0,  0,  0, 1);    
                    obj.applyMatrix(matrizR);   //Aplicar matriz de rotacion al objeto
                    
                
            }else{
            matrizR.set( cs,-ss,  0, 0,
                         ss, cs,  0, 0, 
                          0,  0,  1, 0,
                          0,  0,  0, 1);    
    
                obj.applyMatrix(matrizR);   //Aplicar matriz de rotacion al objeto
                
        }
        tr1=[posini[0],posini[1],posini[2]];  //vector para devolver a la posicion inicial
        obj.applyMatrix(traslate(tr1));     //Aplicar matriz para llevar a la posicion inicial
        return obj;         //Retornar objeto rotado
    }

//Define una funcion que construye una geometria en THREE.JS y la retorna
//vx= Arreglo de vertices
    function Geometria(vx){
        geom=new THREE.Geometry();
        var largoVertice = vx.length;
        for (i = 0; i < largoVertice; i++) {
            x = vx[i][0];
            y = vx[i][1];
            z = vx[i][2];
            vector = new THREE.Vector3(x, y, z);
            geom.vertices.push(vector);
        }
        return geom;
    }