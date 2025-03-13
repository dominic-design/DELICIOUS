import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class Calculator extends JFrame implements ActionListener {
    private final JTextField display = new JTextField();
    private final JLabel historyLabel = new JLabel();
    private String currentInput = "";
    private double num1, num2, result;
    private char operator;

    public Calculator() {
        setTitle("Calculator");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new BorderLayout());

        // Display setup
        display.setFont(new Font("Arial", Font.PLAIN, 24));
        display.setHorizontalAlignment(JTextField.RIGHT);
        display.setEditable(false);
        add(display, BorderLayout.NORTH);

        // History label setup
        historyLabel.setFont(new Font("Arial", Font.PLAIN, 16));
        historyLabel.setHorizontalAlignment(JLabel.RIGHT);
        historyLabel.setForeground(Color.GRAY);
        add(historyLabel, BorderLayout.SOUTH);

        // Button panel setup
        JPanel buttonPanel = new JPanel(new GridLayout(5, 4, 2, 2));
        String[] buttons = {
            "Back", "C", "7", "8", "9", "/",
            "4", "5", "6", "*", "1", "2",
            "3", "-", "0", ".", "=", "+"
        };

        for (String text : buttons) {
            JButton button = new JButton(text);
            button.setFont(new Font("Arial", Font.PLAIN, 18));
            button.addActionListener(this);
            buttonPanel.add(button);
        }

        // Add placeholder buttons to fill the grid
        buttonPanel.add(new JButton()); 
        buttonPanel.add(new JButton()); // Empty button

        add(buttonPanel, BorderLayout.CENTER);
        setSize(300, 450); // Slightly taller to accommodate the history label
        setLocationRelativeTo(null);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        String command = e.getActionCommand();

        switch (command) {
            case "Back":
                currentInput = currentInput.isEmpty() ? "" : currentInput.substring(0, currentInput.length() - 1);
                break;
            case "C":
                currentInput = "";
                break;
            case "=":
                evaluateResult();
                break;
            default:
                currentInput += command;
        }
        display.setText(currentInput);
    }

    private void evaluateResult() {
        try {
            double result = evaluateExpression(currentInput);
            historyLabel.setText(currentInput + " ="); // Show the expression being evaluated
            currentInput = String.valueOf(result);
        } catch (ArithmeticException ex) {
            currentInput = "Division by zero";
        } catch (Exception ex) {
            currentInput = "Invalid Expression";
        }
    }

    private double evaluateExpression(String expression) {
        return new Object() {
            int pos = -1, ch;

            void nextChar() {
                ch = (++pos < expression.length()) ? expression.charAt(pos) : -1;
            }

            boolean eat(int charToEat) {
                while (ch == ' ') nextChar();
                if (ch == charToEat) {
                    nextChar();
                    return true;
                }
                return false;
            }

            double parse() {
                nextChar();
                double x = parseExpression();
                if (pos < expression.length()) throw new RuntimeException("Invalid character");
                return x;
            }

            double parseExpression() {
                double x = parseTerm();
                for (;;) {
                    if (eat('+')) x += parseTerm();
                    else if (eat('-')) x -= parseTerm();
                    else return x;
                }
            }

            double parseTerm() {
                double x = parseFactor();
                for (;;) {
                    if (eat('*')) x *= parseFactor();
                    else if (eat('/')) {
                        double divisor = parseFactor();
                        if (divisor == 0) throw new ArithmeticException();
                        x /= divisor;
                    } else return x;
                }
            }

            double parseFactor() {
                if (eat('+')) return parseFactor();
                if (eat('-')) return -parseFactor();

                double x;
                int startPos = this.pos;
                if (eat('(')) {
                    x = parseExpression();
                    eat(')');
                } else if ((ch >= '0' && ch <= '9') || ch == '.') {
                    while ((ch >= '0' && ch <= '9') || ch == '.') nextChar();
                    x = Double.parseDouble(expression.substring(startPos, this.pos));
                } else {
                    throw new RuntimeException("Invalid character");
                }
                return x;
            }
        }.parse();
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> new Calculator().setVisible(true));
    }
}
