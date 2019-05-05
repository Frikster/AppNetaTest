package com.example.helloworld.core;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import java.util.Objects;
import java.util.Date;

@Entity
@Table(name = "players")
@NamedQueries(
    {
        @NamedQuery(
            name = "com.example.helloworld.core.Player.findAll",
            query = "SELECT p FROM Player p"
        )
    })
public class Player {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "number")
    private long number;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "pos", nullable = false)
    private String pos;

    @Column(name = "nat", nullable = false)
    private String nat;

    @Column(name = "height", nullable = false)
    private double height;

    @Column(name = "weight", nullable = false)
    private int weight;

    @Column(name = "dob", nullable = false)
    private Date dob;

    @Column(name = "birthplace", nullable = false)
    private String birthplace;

    public Player() {
    }

    public Player(long number, String name, String pos, String nat, double height, int weight, Date dob, String birthplace) {
        this.number = number;
        this.name = name;
        this.pos = pos;
        this.nat = nat;
        this.height = height;
        this.weight = weight;
        this.dob = dob;
        this.birthplace = birthplace;
    }

    public long getId() {
        return number;
    }

    public void setId(long number) {
        this.number = number;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPos() {
        return pos;
    }

    public void setPos(String pos) {
        this.pos = pos;
    }

    public String getNat() {
        return nat;
    }

    public void setNat(String nat) {
        this.nat = nat;
    }

    public double getHeight() {
        return height;
    }

    public void setHeight(double height) {
        this.height = height;
    }

    public long getWeight() {
        return weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

    public String getBirthplace() {
        return birthplace;
    }

    public void setBirthplace(String birthplace) {
        this.birthplace = birthplace;
    }


        //<column name="number" type="numeric"/>
    //<column name="name" type="string"/>
    //<column name="nat" type="string"/>
    //<column name="pos" type="string"/>
    //<column name="height" type="numeric"/>
    //<column name="weight" type="numeric"/>
    //<column name="dob" type="date"/>
    //<column name="birthplace" type="string"/>

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Player)) {
            return false;
        }

        final Player that = (Player) o;

        return Objects.equals(this.number, that.number) &&
                Objects.equals(this.name, that.name) &&
                Objects.equals(this.pos, that.pos) &&
                Objects.equals(this.nat, that.nat) &&
                Objects.equals(this.height, that.height) &&
                Objects.equals(this.weight, that.weight) &&
                Objects.equals(this.dob, that.dob) &&
                Objects.equals(this.birthplace, that.birthplace) &&;
    }

    @Override
    public int hashCode() {
        return Objects.hash(number, name, pos, nat, height, weight, dob, birthplace);
    }
}
