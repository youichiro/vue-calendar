class Calendar < ApplicationRecord
  has_many :events, dependent: :destroy

  validates :name, presence: true, length: { maximum: 100 }
end
