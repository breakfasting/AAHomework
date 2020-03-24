class User < ApplicationRecord
  validates :username, :session_token, presence: true
  validates :password_digest, presence: { message: "Password can't be blank" }
  validates :password, length: { minimum: 7, allow_nil: true }
  before_validation :ensure_session_token

  attr_reader :password

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    if !user.nil? && BCrypt::Password.new(user.password_digest).is_password?(password)
      return user
    end
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def reset_session_token!
    new_token = User.generate_session_token

    self.update(session_token: new_token)
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def password=(val)
    @password = val
    self.password_digest = BCrypt::Password.create(val)
  end
end
