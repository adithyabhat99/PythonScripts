// Run this and see a happy face!
import java.awt.Color;
import java.awt.Component;
import java.awt.Frame;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.Polygon;
import java.awt.geom.Arc2D;
import java.awt.geom.Ellipse2D;

public class Shape {
    public static void main(String args[]) {
        Frame frame = new Frame("Shape");
        frame.add(new CustomPaintComponent());
        frame.setSize(500, 700);
        frame.setVisible(true);
        frame.setLocationRelativeTo(null);
    }

    static class CustomPaintComponent extends Component {
        public void paint(Graphics g) {
            Graphics2D g2d = (Graphics2D) g;
            g2d.setColor(Color.GREEN);
            g2d.fillOval(170,110,150,150);
            g2d.fillPolygon(new int[]{220,270,350,150},new int[]{260,260,410,410},4);
            g2d.fillRect(227,410,50,70);
            g2d.setColor(Color.WHITE);
            g2d.drawPolygon(new int[]{245,225,265},new int[]{165,210,210},3);
            g2d.setColor(Color.PINK);
            g2d.fillOval(200,140,38,30);
            g2d.setColor(Color.WHITE);
            g2d.fillOval(252,140,38,30);
            g2d.setColor(Color.BLACK);
            g2d.fillOval(208,145,20,20);
            g2d.fillOval(260,145,20,20);
            g2d.setColor(Color.WHITE);
            g2d.fillArc(207, 210, 80, 25,180,180);
        }
    }
}