class Person
  def initialize(name)
    @name = name
  end

  compare_with(person)
    person.name.length <=> self.name.length
  end

  private
  attr_reader :name
end