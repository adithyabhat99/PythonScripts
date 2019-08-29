// Multiplying 3*3 matrix using mutithreading

public class matrixMulThreads implements Runnable {
    int x[][], y[][], z[][], a;

    public matrixMulThreads() {
        a = -1;
        x = new int[3][3];
        y = new int[3][3];
        z = new int[3][3];
        // Store any value in matrices
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                x[i][j] = i + j;
                y[i][j] = i + j;
            }
        }
    }

    public void run() {
        a++;
        for(int i=0;i<3;i++)
        {
            z[a][i]=0;
            for(int j=0;j<3;j++)
                z[a][i]+=x[a][j]*y[j][i];
        }
    }

    public static void main(String args[]) {
        matrixMulThreads m = new matrixMulThreads();
        // we need 3 threads(i.e. 0th row with 3 columns,1st row with 3 columns,2nd row
        // with 3 columns)
        Thread M[] = new Thread[3];
        for (int i = 0; i < 3; i++) {
            M[i] = new Thread(m);
            M[i].start();
        }
        // wait untill all 3 threads are dead
        while (M[0].isAlive() || M[1].isAlive() || M[2].isAlive());
        // print result
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                System.out.printf("%d ", m.z[i][j]);
            }
            System.out.println("");
        }
    }
}