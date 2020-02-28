class Stack
  def initialize
    # create ivar to store stack here!
    @stack = []
  end

  def push(el)
    # adds an element to the stack
    @stack << el
    true
  end

  def pop
    # removes one element from the stack
    unless @stack.empty?
      @stack.pop
    else
      return false
    end
  end

  def peek
    # returns, but doesn't remove, the top element in the stack
    @stack[-1]
  end
end
