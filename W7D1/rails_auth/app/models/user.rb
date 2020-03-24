class User < ApplicationRecord
  validates :username, :session_token, presence: true
  validates :password_digest, presence: { message: "Password can't be blank" }
  validates :password_digest, length: { minimum: 7, message: "Password must be longer than 7 chars" }
  validates :password_digest, allow_nil: true
  before_validation :ensure_session_token

end
