import javax.swing.*;
import java.awt.*;

public class studentForm{

    public static void main(String[] args){

    JFrame frame=new JFrame("student form");
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    frame.setSize(500,300);
    frame.setLayout(new BorderLayout());

    JTabbedPane tabbedPane=new JTabbedPane();
    JPanel studentPanel=new JPanel();
    studentPanel.setLayout(new GridBagLayout());

    GridBagConstraints gbc=new GridBagConstraints();
    gbc.insets = new Insets(5,5, 5, 5);
    gbc.fill=GridBagConstraints.HORIZONTAL;

    String[] labels={"Admission Number", "First Name", "Middle Name", "Last Name", "Course Taken"};
    JTextField[] textFields=new JTextField[labels.length];

    for(int i=0; i <labels.length;i++){
        gbc.gridx=0;
        gbc.gridy=i;
        studentPanel.add(new JLabel(labels[i]+":"),gbc);

        gbc.gridx=1;
        textFields[i] = new JTextField(20);
        studentPanel.add(textFields[i],gbc);



    }

    JPanel buttonPanel=new JPanel();
    JButton saveButton=new JButton("Save");
    JButton editButton=new JButton("Edit");
    JButton searchButton=new JButton("Search");
    JButton cancelButton=new JButton("Cancel");

    buttonPanel.add(saveButton);
    buttonPanel.add(editButton);
    buttonPanel.add(searchButton);
    buttonPanel.add(cancelButton);

    gbc.gridx=0;
    gbc.gridy=labels.length;
    gbc.gridwidth=2;
    studentPanel.add(buttonPanel,gbc);

    tabbedPane.addTab("STUDENT",studentPanel);
    tabbedPane.addTab("KISE",new JPanel());
    tabbedPane.addTab("Three",new JPanel());
    tabbedPane.addTab("Four",new JPanel());

    frame.add(tabbedPane, BorderLayout.PAGE_START);
    frame.setVisible(true);
}

}