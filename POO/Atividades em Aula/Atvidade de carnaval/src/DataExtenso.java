import java.util.Scanner;
import static java.lang.Integer.*;
public class DataExtenso {
    public static void main(String[] args){
        Scanner leitor = new Scanner(System.in);
        String data[] = {" ","Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"};
        
        System.out.println("Digite uma data de sua preferência ");
        String entrada = leitor.nextLine();
        
        String dados[] = entrada.split("/"); //14/05/2002
        int mes_extenso = parseInt(dados[1]);
        
        System.out.println(dados[0] + " de " + data[mes_extenso] + " de " + dados[2]);
        


    }
 
}
