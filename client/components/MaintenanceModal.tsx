 "use client"
import React from 'react';
import {
  
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
 
  useDisclosure
} from '@heroui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';


const MaintenanceModal = () => {
 
 const {  onOpen, onOpenChange } = useDisclosure();

  return (
    <Modal
      isOpen={true}
      onOpenChange={onOpenChange}
      placement="center"
      scrollBehavior="inside"
      isDismissable={false}
      aria-hidden
    >
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex flex-col">
              <h3 className="text-lg font-semibold flex gap-2 items-center"><ExclamationTriangleIcon className='size-5 text-danger'/>Application error</h3>
              <p className="text-sm text-default-500">
                Site is currently under maintenance
              </p>
            </ModalHeader>
            <ModalBody>
              <p>
                Contact admin for more details at 
                <strong> admin@spacedezyn.com</strong>
              </p>
            </ModalBody>
            <ModalFooter>
              
              <Button
                onPress={onOpen}
                className="bg-[#F19645] flex items-center gap-1 text-white font-semibold"
              >
                <p>Contact admin</p>
           
                  {/* <Spinner size="sm" variant="spinner" color="white" /> */}
                
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default MaintenanceModal;
