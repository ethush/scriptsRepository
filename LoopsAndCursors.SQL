## This stored procedure updates a field between tables comparing a value from a second

CREATE DEFINER=`root`@`localhost` PROCEDURE `actualiza_entregas`()
BEGIN
    DECLARE nom_entregado varchar(255);
    DECLARE fin integer default 0;
    
    #select data for iteration
    DECLARE entregados_cursor CURSOR FOR 
		  SELECT municipio FROM entregados;
	
    #exit condition for entregados_cursor
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET fin=1;
    
    #open cursor
    OPEN entregados_cursor;
    
    #begin loop
    get_entregados: LOOP
		#set the value of entregados_cursor to variable nom_entregado
		FETCH entregados_cursor INTO nom_entregado;
		IF fin = 1 THEN 
       #if condition ... exit loop
		   LEAVE get_entregados;
		END IF;
        
        #update the field when nom_entregado like nom loc in second table
        UPDATE georeferencia set registro = 1 where nom_loc like nom_entregado;
	
	#end loop
	END LOOP get_entregados;
  
  #close the cursor
  close entregados_cursor;

END
