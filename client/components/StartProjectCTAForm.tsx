import { ArrowRightIcon } from '@heroicons/react/24/outline';
import {
  Button,
  Form,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  Spinner,
  Textarea,
  useDisclosure,
} from '@heroui/react';
import React from 'react';

const StartProjectCTAForm = ({ bgBtn }: { bgBtn: boolean }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div>
      {' '}
      <Button
        onPress={onOpen}
        className={`${bgBtn ? 'bg-[#F19645] text-white' : 'bg-transparent text-[#F19645]'} font-semibold`}
      >
        Start project
        <ArrowRightIcon className="size-4" />
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        scrollBehavior="inside"
        isDismissable={false}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col">
                <h3 className="text-lg font-semibold">
                  Start Your Dream Project
                </h3>
                <p className="text-xs text-default-500 font-light">
                  Tell us about your vision and our team will contact you within
                  24 hours to discuss your project, provide expert guidance, and
                  schedule your consultation.
                </p>
              </ModalHeader>
              <ModalBody>
                <Form className="space-y-4" id="start-project-form">
                  <Input
                    className="ring-0 outline-0"
                    label="Full Name"
                    placeholder="Mike Elis"
                    labelPlacement="outside"
                    isRequired
                  />

                  <Input
                    className="ring-0 outline-0"
                    label="Email Address"
                    type="email"
                    placeholder="john@example.com"
                    isRequired
                    labelPlacement="outside"
                  />

                  <Input
                    className="ring-0 outline-0"
                    label="Phone Number"
                    type="tel"
                    placeholder="+234..."
                    isRequired
                    labelPlacement="outside"
                  />

                  <Select
                    label="Service Required"
                    placeholder="Select a service"
                    isRequired
                    labelPlacement="outside"
                  >
                    <SelectItem key="interior">Interior Design</SelectItem>

                    <SelectItem key="architecture">Architecture</SelectItem>

                    <SelectItem key="renovation">Renovation</SelectItem>

                    <SelectItem key="smart-home">Smart Home</SelectItem>

                    <SelectItem key="commercial">Commercial Design</SelectItem>

                    <SelectItem key="residential">
                      Residential Design
                    </SelectItem>

                    <SelectItem key="visualization">
                      3D Visualization
                    </SelectItem>

                    <SelectItem key="other">Other</SelectItem>
                  </Select>

                  <Select
                    label="Project Type"
                    placeholder="Select project type"
                    isRequired
                    labelPlacement="outside"
                  >
                    <SelectItem key="residential">Residential</SelectItem>

                    <SelectItem key="commercial">Commercial</SelectItem>

                    <SelectItem key="office">Office</SelectItem>

                    <SelectItem key="retail">Retail</SelectItem>

                    <SelectItem key="hospitality">Hospitality</SelectItem>

                    <SelectItem key="other">Other</SelectItem>
                  </Select>

                  <Input
                    label="Project Location"
                    placeholder="Abuja, Nigeria"
                    isRequired
                    labelPlacement="outside"
                  />

                  <Select
                    label="Estimated Budget"
                    placeholder="Select budget"
                    isRequired
                    labelPlacement="outside"
                  >
                    <SelectItem key="1">Below ₦2M</SelectItem>

                    <SelectItem key="2">₦2M – ₦5M</SelectItem>

                    <SelectItem key="3">₦5M – ₦10M</SelectItem>

                    <SelectItem key="4">₦10M – ₦20M</SelectItem>

                    <SelectItem key="5">₦20M+</SelectItem>
                  </Select>

                  <Select
                    label="Project Timeline"
                    placeholder="When would you like to begin?"
                    isRequired
                    labelPlacement="outside"
                  >
                    <SelectItem key="now">Immediately</SelectItem>

                    <SelectItem key="1month">Within 1 Month</SelectItem>

                    <SelectItem key="3months">1–3 Months</SelectItem>

                    <SelectItem key="6months">3–6 Months</SelectItem>

                    <SelectItem key="planning">Just Planning</SelectItem>
                  </Select>

                  <Textarea
                    label="Project Description"
                    placeholder="Tell us about your project, preferred style, number of rooms, special requirements, or any inspiration you have."
                    minRows={5}
                    isRequired
                    labelPlacement="outside"
                  />

                  <Select
                    label="How did you hear about us?"
                    placeholder="Optional"
                    labelPlacement="outside"
                  >
                    <SelectItem key="google">Google</SelectItem>

                    <SelectItem key="instagram">Instagram</SelectItem>

                    <SelectItem key="facebook">Facebook</SelectItem>

                    <SelectItem key="referral">Referral</SelectItem>

                    <SelectItem key="returning">Returning Client</SelectItem>

                    <SelectItem key="other">Other</SelectItem>
                  </Select>
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button
                  type="submit"
                  form="start-project-form"
                  className="bg-[#F19645] text-white font-semibold"
                >
                  submit
                  <Spinner size="sm" variant="spinner" color="white" />
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default StartProjectCTAForm;
