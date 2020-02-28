class Queue
  def initialize
    @queue = []
  end

  # enqueue(el), dequeue, and peek
  def enqueue(el)
    @queue.push(el)
    true
  end

  def dequeue
    unless @queue.empty?
      @queue.shift
    else
      return false
    end
  end

  def peek
    @queue[0]
  end
end