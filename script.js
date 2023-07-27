public class Animal {
    private String species;

    public Animal(String species) {
        this.species = species;
    }

    public String getSpecies() {
        return this.species;
    }

    public void makeSound() {
        System.out.println("Animal sound");
    }
}
public class Cat extends Animal {
    public Cat(String species) {
        super(species);
    }

    public void purr() {
        System.out.println("purr");
    }
}